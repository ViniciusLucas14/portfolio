export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}
export function getCurrentTimeInbRASIL(): Date {
  // Create a date object with the current UTC time
  const now = new Date();

  const offset = -3;
  now.setHours(now.getUTCHours() + offset);

  return now;
}

export function formatTimeForBrasil(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "America/Sao_Paulo",
  };

  let formattedTime = new Intl.DateTimeFormat("pt-BR", options).format(date);

  formattedTime += " UTC -3";

  return formattedTime;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
//Ireland
export function getCurrentTimeInIreland(): Date {
  // Create a date object with the current UTC time
  const now = new Date();

  const offset = 0;
  now.setHours(now.getUTCHours() + offset);

  return now;
}

export function formatTimeForIreland(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "Europe/Dublin",
  };

  const formattedTime = new Intl.DateTimeFormat("en-IE", options).format(date);

  return `${formattedTime} UTC+0`;
}