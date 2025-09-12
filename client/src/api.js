export const fetchMessage = async () => {
  try {
    const response = await fetch('http://localhost:5173/certificate-verification');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};



export const sendData = async (name) => {
  const response = await fetch('http://localhost:5173/certificate-verification', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name })
  });
  return await response.json();
};
