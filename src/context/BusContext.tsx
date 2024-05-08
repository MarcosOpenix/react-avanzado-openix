import { CheckPoint, CheckPointDetailsResponse, VehicleResponse } from '@/interfaces/busManager';
import { busesData, checkPointsData } from '@/service/data';
import React, { createContext, useReducer, Dispatch, PropsWithChildren, useLayoutEffect } from 'react';

//reducer state and actions
export enum BusReducerActions {
  GETVEHICLEDETAILS = 'GET-VEHICLE-DETAILS',
  SELECTVEHICLE = 'SELECT-VEHICLE',
  SELECTCHECKPOINT = 'SELECT-CHECKPOINT',
  GETSTATESAVED = 'GET-STATE-SAVED',
  DELETECHECKPOINT = 'DELETE-CHECKPOINT',
  ADDCHECKPOINT = 'ADDCHECKPOINT',
  EDITCHECKPOINT = 'EDITCHECKPOINT'
}

interface State {
  vehicles: VehicleResponse[];
  checkPoints: CheckPoint[];
  selectedVehicle?: string;
  selectedCheckPoint?: string;
}

interface BusManagerActions {
  type: BusReducerActions;
  payload?: string | CheckPointDetailsResponse;
}

const reducer = (state: State, action: BusManagerActions): State => {
  switch (action.type) {
    case BusReducerActions.SELECTVEHICLE:
      localStorage.setItem("busManager", JSON.stringify({ ...state, selectedVehicle: action.payload }))
      return { ...state, selectedVehicle: action.payload as string | undefined };
    case BusReducerActions.SELECTCHECKPOINT:
      localStorage.setItem("busManager", JSON.stringify({ ...state, selectedCheckPoint: action.payload }))
      return { ...state, selectedCheckPoint: action.payload as string | undefined };
    case BusReducerActions.GETSTATESAVED:
      const stateSaved = localStorage.getItem("busManager");
      if (stateSaved) {
        return { ...(JSON.parse(stateSaved)) }
      }
      return { ...state };
    case BusReducerActions.DELETECHECKPOINT:
      const auxVehicles = state.vehicles.map(value => {
        if (value.dominio === state.selectedVehicle) {
          return {
            ...value,
            checkPoints: value.checkPoints.filter(check => check.checkPointId != Number(state.selectedCheckPoint))
          }
        } else {
          return value
        }
      })
      localStorage.setItem("busManager", JSON.stringify({ ...state, vehicles: auxVehicles, selectedCheckPoint: undefined }))
      return { ...state, vehicles: auxVehicles, selectedCheckPoint: undefined };
    case BusReducerActions.ADDCHECKPOINT:
      const auxVehiclesAdd = state.vehicles.map(vehicle => {
        if (vehicle.dominio === state.selectedVehicle) {
          return {
            ...vehicle,
            checkPoints: [...vehicle.checkPoints, action.payload as CheckPointDetailsResponse]
          }
        }
        return { ...vehicle }
      })
      localStorage.setItem("busManager", JSON.stringify({ ...state, vehicles: auxVehiclesAdd, selectedCheckPoint: undefined }))
      return { ...state, vehicles: auxVehiclesAdd, selectedCheckPoint: undefined };
    case BusReducerActions.EDITCHECKPOINT:
      const auxVehiclesEdit = state.vehicles.map(vehicle => {
        if(vehicle.dominio === state.selectedVehicle){
          return {
            ...vehicle,
            checkPoints: vehicle.checkPoints.map(check => {
              if(check.checkPointId === Number(state.selectedCheckPoint)){
                return {
                  ...action.payload as CheckPointDetailsResponse
                }
              }else {
                return check
              }
            })
          }
        }else{
          return vehicle
        }
      })
      localStorage.setItem("busManager", JSON.stringify({ ...state, vehicles: auxVehiclesEdit, selectedCheckPoint: undefined }))
      return { ...state, vehicles: auxVehiclesEdit, selectedCheckPoint: undefined };
    default:
      return state;
  }
};
//reducer state and actions end


// context
export interface ContextBusType {
  state: State;
  dispatch: Dispatch<BusManagerActions>;
}

const initialState: State = {
  vehicles: busesData,
  checkPoints: checkPointsData
};

export const MyBusContext = createContext<ContextBusType | undefined>(undefined);

export const BusProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useLayoutEffect(() => {
    dispatch({ type: BusReducerActions.GETSTATESAVED })
  }, [])


  return (
    <MyBusContext.Provider value={{ state, dispatch }}>
      {children}
    </MyBusContext.Provider>
  );
};
// context end

