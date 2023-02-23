let numberOfChocolates = 100

class Node {
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
  
  
  const root = new Node(1)
  const node2 = new Node(2)
  const node3 = new Node(3)
  const node4 = new Node(4)
  const node5 = new Node(5)
  const node6 = new Node(6)
  const node7 = new Node(7)
  
  root.addChild(node2)
  root.addChild(node3)
  root.addChild(node7)
  node2.addChild(node4)
  node2.addChild(node5)
  node3.addChild(node6)
  // node3.addChild(node7)
  
  
  let countChildren=(node)=> {
    let count = 0
    
    for (let child of node.children) {
      count += countChildren(child) + 1
    }
    
    return count
  }

  let countLeaf = (node) => {
    if (node.children.length === 0) {
      return 1
    } else {
      let leafCount = 0
      for (let child of node.children) {
        leafCount += countLeaf(child)
      }
      return leafCount
    }
  }

  let totalChildren = countLeaf(root)
  console.log("Total number of children in the tree:", totalChildren)
  
  
  const adjacentNodes = root.children
  console.log("Adjacent nodes of the root node:", adjacentNodes)

 

  

  let chocolateRatio = numberOfChocolates / totalChildren
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



  