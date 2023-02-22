class node {
    constructor(data) {
        this.data = data
        this.lchild = null
        this.rchild = null
    }
}

function getHeight(node) {
    if (node == null) {
      return 0
    } else {
      let maxHeight = 0
      for (let child of [node.lchild, node.rchild]) {
        const childHeight = getHeight(child)
        maxHeight = Math.max(maxHeight, childHeight)
      }
      return 1 + maxHeight
    }
  }
  
  

let root = new node(10)
root.lchild = new node(54)
root.rchild = new node(15)
root.lchild.lchild = new node(35)
root.lchild.rchild = new node(7)
root.rchild.lchild = new node(13)
root.rchild.rchild = new node(105)
root.rchild.rchild.rchild = new node(15)

console.log(getHeight(root))