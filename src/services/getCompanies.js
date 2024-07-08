export async function getCompanies(func) {
  const response = await fetch('http://localhost:3000/api/companies');
  const data = await response.json();
  func(data);
}
