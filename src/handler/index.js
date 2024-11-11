import { HANDLER_IDS } from '../constants/handlerIds.js';

const handlers = {
  [HANDLER_IDS.INITIAL]: {
    protoType: 'initial.InitialPayload',
  },
};

export const getProtoTypeNameByHandlerId = (handerId) => {
  if (!handlers[handerId]) {
    throw Error();
  }
  return handlers[handerId].protoType;
};
