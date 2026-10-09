class BST {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }



    insert(value) {

        if (value < this.value) {

            if (!this.left) {
                this.left = new BST(value)
            } else {
                this.left.insert(value)
            }
        } else if (value > this.value) {

            if (!this.right) {
                this.right =  new BST(value)
            } else {

                this.right.insert(value)
            }
        }
    }

    print(prefix = '', isLeft = null) {
        const pad = (bar) => (isLeft === null ? '' : bar ? '│   ' : '    ')
        const connector = isLeft === null ? '' : isLeft ? '└── ' : '┌── '

        if (this.right) this.right.print(prefix + pad(isLeft === true), false)
        console.log(prefix + connector + this.value)
        if (this.left) this.left.print(prefix + pad(isLeft === false), true)
    }

}


const bst = new BST(4)

bst.insert(3)
bst.insert(5)

bst.insert(6)

bst.print()

console.log(bst)