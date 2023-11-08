export const fibonacci = (n: number): number => {
  if (n === 0 || n === 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

class TreeNode {
  treeValue: number;
  leftChildNode?: TreeNode;
  rightChildNode?: TreeNode;

  constructor(treeValue: number) {
    this.treeValue = treeValue;
  }
}

export class BinaryTree {
  root?: TreeNode;

  insertValue(value: number) {
    const newTreeNode = new TreeNode(value);

    if (this.root == undefined) {
      this.root = newTreeNode;
    } else {
      let currentValue = this.root!;
      while (true) {
        if (value < currentValue.treeValue) {
          if (currentValue.leftChildNode == null) {
            currentValue.leftChildNode = newTreeNode;
            break;
          }
          currentValue = currentValue.leftChildNode!;
        } else {
          if (currentValue.rightChildNode == null) {
            currentValue.rightChildNode = newTreeNode;
            break;
          }
          currentValue = currentValue.rightChildNode!;
        }
      }
    }
  }

  containsValue(value: number): boolean {
    let currentNode: TreeNode | undefined = this.root;
    while (currentNode != null) {
      if (value == currentNode.treeValue) {
        return true;
      } else if (value < currentNode.treeValue) {
        currentNode = currentNode.leftChildNode;
      } else {
        currentNode = currentNode.rightChildNode;
      }
    }
    return false;
  }
}
