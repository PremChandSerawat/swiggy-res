import {categoriesObject} from '../constant/comman'

export default function category(state = categoriesObject['See All'], action) {
    console.log('categoriesObject',categoriesObject)
    switch (action.type) {
      case 'select category':
        return categoriesObject[action.payload]
      default:
        return categoriesObject['See All']
    }
  }