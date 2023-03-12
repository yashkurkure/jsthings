import os
import json
import git


def listFiles(path):
    files_and_dirs = os.listdir(path)
    files = [f for f in files_and_dirs if os.path.isfile(path+'/'+f)]
    return files

def listDirs(path):
    files_and_dirs = os.listdir(path)
    files = [f for f in files_and_dirs if not os.path.isfile(path+'/'+f)]
    return files


def generateTree(path, tree, next_id, src_id):
    directories = listDirs(path)
    files = listFiles(path)
    next_dir_id = next_id + len(files) + len(directories)
    for file in files:
        tree["nodes"].append({"id": str(next_id), "name": str(file), "val": 1})
        tree["links"].append({ "source": str(src_id), "target": str(next_id) })
        next_id +=1
    for directory in directories:
        tree["nodes"].append({"id": str(next_id), "name": str(directory), "val": 0})
        tree["links"].append({ "source": str(src_id), "target": str(next_id) })
        num_nodes_added = generateTree(path+"/"+directory, tree, next_dir_id, next_id)
        next_dir_id = next_dir_id + num_nodes_added
        next_id +=1
    return len(files) + len(directories)




def main():
    try:
        repo = git.Repo.clone_from('git@github.com:yashkurkure/learnopengl.git',
                           './learnopengl',
                           branch='master')
    except:
        print("Could not clone. Repository might already be cloned.")
    tree = {
        "nodes" : [
            { "id": "1", "name": ".", "val": 0 },
        ], 
        "links" : [

        ]
    }
    generateTree("./learnopengl", tree, 2, 1)
    json_object = json.dumps(tree, indent = 4) 
    print(json_object)


if __name__ == "__main__":
    main()