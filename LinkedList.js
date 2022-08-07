function LinkedList () {
  let head = null
  let length = 0

  const append = val => {
    const node = Node(val)
    length = length + 1
    if (head === null) return (head = node)

    let current = head
    while (current.nextNode !== null) {
      current = current.nextNode
    }
    current.nextNode = node
  }

  const prepend = val => {
    length = length + 1
    if (head === null) return (head = node)
    head = Node(val, head)
  }

  const toString = () => {
    let listString = ''
    if (head === null) return '()'

    let current = head
    while (current !== null) {
      listString = listString + `(${current.value}) -> `
      current = current.nextNode
    }
    return listString + 'null'
  }

  const size = () => {
    return length
  }

  const getHead = () => {
    return head
  }

  const getTail = () => {
    if (head === null) return null

    let current = head
    while (current.nextNode !== null) {
      current = current.nextNode
    }
    return current
  }

  const at = index => {
    if (head === null) return null

    let current = head

    for (let i = 0; i < index; i++) {
      current = current.nextNode
    }
    return current
  }

  const pop = () => {
    if (head === null) return null

    at(length - 2).nextNode = null
    length--
  }

  const contains = val => {
    if (head === null) return null

    current = head
    while (current !== null) {
      if (current.value === val) return true
      current = current.nextNode
    }
    return false
  }

  const find = val => {
    if (head === null) return null
    let index = 0
    current = head

    while (current !== null) {
      if (current.value === val) return index
      current = current.nextNode
      index++
    }
    return null
  }

  const insertAt = (val, index) => {
    const suffix = at(index)
    const node = Node(val, suffix)

    at(index - 1).nextNode = node
    length++
  }

  const removeAt = (index) => {
    at(index - 1).nextNode = at(index + 1)
    length--
  }

  return {
    append,
    prepend,
    toString,
    size,
    getHead,
    getTail,
    at,
    pop,
    contains,
    find,
    insertAt,
    removeAt
  }
}

function Node (value = null, nextNode = null) {
  return { value, nextNode }
}