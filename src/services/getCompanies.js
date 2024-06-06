export async function getCompanies(func) {
  const response = await fetch('http://grupotaraborelli.com/lib/backend/fichadas/get-empresas.php');
  const data = await response.json();
  func(data);
}
