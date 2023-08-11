// about event handle
export default function Fun_Click() {
  function EventHandle() {
    console.log("Clicked");
  }
  return <button onClick={EventHandle}>Click me</button>;
}
