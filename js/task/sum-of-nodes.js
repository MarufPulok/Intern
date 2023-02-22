class node {
    constructor(data) {
        this.data = data
        this.lchild = null
        this.rchild = null
    }
}

function sum(root) {
    if (root == null) {
        return 0
    }
    return root.data + sum(root.lchild) + sum(root.rchild)
}

let root = new node(10)
root.lchild = new node(5)
root.rchild = new node(15)
root.lchild.lchild = new node(3)
root.lchild.rchild = new node(7)
root.rchild.lchild = new node(13)
root.rchild.rchild = new node(10)
// root.rchild.rchild.rchild = new node(15)


console.log(sum(root))