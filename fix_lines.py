import glob

files = glob.glob('src/pet_adoption/**/*.ts', recursive=True)
files.append('src/pet_adoption/index.html')

total_lines = 0
for f in files:
    with open(f, 'r') as fp:
        total_lines += len(fp.readlines())
print(f"Current WC lines: {total_lines}")
