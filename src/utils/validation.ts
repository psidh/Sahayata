// validationUtils.js

export const isValidDate = (date: string): boolean => {
  const dateRegex = /^\d{2}-\d{2}-\d{4}$/;
  return dateRegex.test(date);
};

export const isValidDumperId = (dumperId: string): boolean => {
  const dumperIdRegex = /^[A-Za-z]{2}\d{4}$/;
  return dumperIdRegex.test(dumperId);
};

export const isValidStatus = (status: string): boolean => {
  const validStatusValues = ['Empty', 'Filling', 'Full'];
  return validStatusValues.includes(status);
};

export const isValidCapacity = (capacity: number): boolean => {
  return capacity >= 1;
};

export const isValidOperatorId = (operatorId: string): boolean => {
  const operatorIdRegex = /^[A-Za-z]{2}\d{4}$/;
  return operatorIdRegex.test(operatorId);
};

export const isValidTime = (time: string): boolean => {
  const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
  return timeRegex.test(time);
};
