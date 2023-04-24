test('Check status of the fetch request', async () => {
    const data = await fetch("https://swapi.dev/api/people/1/");
    expect(data.status).toBe(200);
    }
);