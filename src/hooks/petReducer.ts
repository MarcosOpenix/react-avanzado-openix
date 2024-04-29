import { Pet } from '@/interfaces/pet';

interface PetState {
  pets: Pet[];
  selectedPet?: Pet;
  openedModal: boolean;
}

export type Action =
  { type: 'update_pet', pet: Pet }
  | { type: 'delete_pet', pet: Pet }
  | { type: 'add_pet', newPet: Pet }
  | { type: 'select_pet', pet?: Pet }
  | { type: 'open_close_modal' };

export const petReducer = (state: PetState, action: Action) => {
  switch (action.type) {
    case "update_pet":

      return {
        ...state,
        pets: state.pets.map((value) => {
          if (value.id === action.pet.id) {
            return action.pet
          } else {
            return value
          }
        })
      };
    case "delete_pet":
      return { ...state, pets: state.pets.filter((value) => (value.id != action.pet.id)) };
    case "select_pet":
      return { ...state, selectedPet: action.pet };
    case "add_pet":
      return { ...state, pets: [...state.pets, action.newPet] };
    case "open_close_modal":
      return { ...state, openedModal: !state.openedModal };
  }
};
