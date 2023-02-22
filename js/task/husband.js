let numberOfChocolates = 120

class TreeNode {
    constructor(value) {
      this.value = value
      this.children = []
    }
    
    addChild(child) {
      this.children.push(child)
    }
    
    isLeaf() {
      return this.children.length === 0
    }
  }
  
  // Create the tree
  const root = new TreeNode(1)
  const node2 = new TreeNode(2)
  const node3 = new TreeNode(3)
  const node4 = new TreeNode(4)
  const node5 = new TreeNode(5)
  const node6 = new TreeNode(6)
  
  root.addChild(node2)
  root.addChild(node3)
  node2.addChild(node4)
  node2.addChild(node5)
  node3.addChild(node6)
  
  
  let countChildren=(node)=> {
    let count = 0
    
    for (let child of node.children) {
      count += countChildren(child) + 1
    }
    
    return count
  }

  
  const totalChildren = countChildren(root);
//   console.log("Total number of children in the tree:", totalChildren)
  
  
  const adjacentNodes = root.children
  console.log("Adjacent nodes of the root node:", adjacentNodes)

  let chocolateRatio = Math.floor(numberOfChocolates / totalChildren)
  console.log(chocolateRatio)
  
  
  for (let node of adjacentNodes) {
    let leafCount = 0
    
    if (node.isLeaf()) {
      leafCount = 1
    } else {
      const queue = [node]
      
      while (queue.length > 0) {
        const currNode = queue.shift()
        
        if (currNode.isLeaf()) {
          leafCount++
        } else {
          for (let child of currNode.children) {
            queue.push(child)
          }
        }
      }
    }
    
    console.log(`Wife at ${node.value}: will get ${leafCount*chocolateRatio} chocolates`)
  }



  