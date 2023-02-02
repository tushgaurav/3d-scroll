import os

def rename_images(path):
    i = 1
    for filename in os.listdir(path):
        extension = os.path.splitext(filename)[1]
        if extension in [".png", ".jpg", ".jpeg"]:
            new_filename = str(i) + extension
            os.rename(os.path.join(path, filename), os.path.join(path, new_filename))
            print(f"File renamed: {filename} to {new_filename}")
            i += 1

path = "./images"
rename_images(path)