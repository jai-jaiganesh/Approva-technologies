"use strict"

function inventoryList() {
	let items = []

	const add = (name) => {
	  const names = items.filter(item => item.name === name)
	  if (names.length === 0) {
	    items.push({name: name})
	  }
	}

	const remove = (name) => {
	  items = items.filter(item => item.name !== name)
	}

	const getList = () => {
	 console.log(items)
		return items
	}

  getList()
  add('Shirt')
  getList()
  add('pant')
  getList()
  remove('Shirt')
  getList()
  add('Trouser')
  getList()
  add('Pant')
  getList()

	return {add, remove, getList}

}

inventoryList()