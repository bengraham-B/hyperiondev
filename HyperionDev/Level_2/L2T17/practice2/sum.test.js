const sum = require('./sum')

//^ First Param : what the test is doing and shows up in console when running the test...
test('properly adds two numbers', () => {
    expect(
        sum(1, 2)
    ).toBe(3)
})


test('renders the landing page', () => {
  render(<App />);
  
  expect(screen.getByRole("heading")).toHaveTextContent(/Doggy Directory/);
  expect(screen.getByRole("combobox")).toHaveDisplayValue("Select a breed");
  expect(screen.getByRole("button", { name: "Search" })).toBeDisabled();
  expect(screen.getByRole("img")).toBeInTheDocument();
});