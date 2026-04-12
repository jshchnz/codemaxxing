import http.server
import socketserver
import json

PORT = 8000

class HealthCheckHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/health':
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            response = {"status": "ok", "service": "notification-service"}
            self.wfile.write(json.dumps(response).encode())
        else:
            self.send_response(404)
            self.end_headers()

with socketserver.TCPServer(("", PORT), HealthCheckHandler) as httpd:
    print(f"Serving at port {PORT}")
    httpd.serve_forever()
