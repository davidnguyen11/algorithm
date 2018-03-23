f  = open('input', 'r')
edges_vertice_str = f.readline().strip().split(' ')
V = int(edges_vertice_str[0])
E = int(edges_vertice_str[1])

graph = {}
visited = []
path = []

for line in f.readlines():
    temp = line.strip().split(' ')
    u = int(temp[0])
    v = int(temp[1])

    if not graph.get(u, False):
        graph[u] = []
    if not graph.get(v, False):
        graph[v] = []
    
    graph[u].append(v)
    graph[v].append(u)

f.close()

result = {}
for i in range(V):
    visited.append(False)
    path.append(-1)
    result[i] = -1

def dfs(src):
    storage = []
    storage.append(src)
    visited[src] = True

    while len(storage) > 0:
        src = storage.pop()

        for vertice in graph[src]:
            if not visited[vertice]:
                storage.append(vertice)
                visited[vertice] = True
                path[vertice] = src
                result[vertice] = src

dfs(3)

def print_path(src, dest, path):
    final_path = []
    step = path[dest]
    final_path.append(dest)

    while step != path[src]:
        final_path.append(step)
        step = path[step]
    print final_path

print_path(3, 5, result)
