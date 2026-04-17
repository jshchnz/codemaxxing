import datetime
from .i_logger import ILogger

class FileLogger(ILogger):
    def __init__(self, filepath: str = "enterprise_rps.log"):
        self.filepath = filepath

    def log(self, message: str) -> None:
        timestamp = datetime.datetime.now().isoformat()
        log_entry = f"[{timestamp}] [INFO] {message}\n"
        with open(self.filepath, "a") as f:
            f.write(log_entry)
