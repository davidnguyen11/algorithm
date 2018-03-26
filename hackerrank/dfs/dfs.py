f  = open('input', 'r')
line = f.readline().strip().split(' ')

V = int(line[0])
E = int(line[1])

data = []
for line in f.readlines() :
    data.append(line.strip())
f.close()

graph = {}
visited = {}
path = {}

for item in data:
    item = item.split(' ')
    u = int(item[0])
    v = int(item[1])

    if not graph.get(u, False):
        graph[u] = []
    if not graph.get(v, False):
        graph[v] = []

    graph[u].append(v)
    graph[v].append(u)

def dfs(src):
    storage = []
    for i in range(V):
        visited[i] = False
        path[i] = -1

    visited[src] = True
    storage.append(src)

    while len(storage) > 0:
        parent = storage.pop()

        for child in graph[parent]:
            if not visited[child]:
                visited[child] = True
                path[child] = parent
                storage.append(child)

def print_path(src, dest, path):
    result = []
    result.append(dest)
    step = dest

    while path[step] != src:
        step = path[step]
        result.append(step)
    result.append(src)
    print result

dfs(0)

print_path(0, 5, path)
