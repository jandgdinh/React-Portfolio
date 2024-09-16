export default function Contact() {
  return (
    <div>
      <h1>Contact John Dinh</h1>
      <form>
        <label>Name:</label>
        <input type="text" name="name" />
        <label>Email:</label>
        <input type="email" name="email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
