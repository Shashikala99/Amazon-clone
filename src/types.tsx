
export interface Item {
  id: string;
  title: string;
  price: number;
  rating: number;
  image: string;
}

export interface State {
  basket: Item[];
  user: null|string;
}



export interface AddToBasketAction {
  type: 'ADD_TO_BASKET';
  item: Item;
}

export interface RemoveFromBasketAction {
  type: 'REMOVE_FROM_BASKET';
  id: string;
}

export type Action = AddToBasketAction | RemoveFromBasketAction;

export type Config = {
  onUpdate?: (registration: ServiceWorkerRegistration) => void;
  onSuccess?: (registration: ServiceWorkerRegistration) => void;
};

  