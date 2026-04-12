import os
count = 0
for root, _, files in os.walk('src'):
    for f in files:
        if f.endswith('.ts') or f.endswith('.tsx'):
            with open(os.path.join(root, f)) as file:
                count += sum(1 for _ in file)
print(count)
