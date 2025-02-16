describe('Card Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render the login page initially', () => {
    cy.contains('Weather App').should('be.visible');
    cy.contains('Inicia sesión para continuar').should('be.visible');
    cy.contains('Iniciar con Google').should('be.visible');
    cy.contains('Iniciar con GitHub').should('be.visible');
  });

  it('should log in with Google and display the weather panel', () => {
    // Interceptar las solicitudes de la API después del login
    cy.intercept('GET', 'https://api.openweathermap.org/data/2.5/weather*', {
      statusCode: 200,
      body: {
        name: 'Test City',
        main: {
          temp: 300,
          temp_max: 305,
          temp_min: 295,
          feels_like: 299,
          humidity: 80,
        },
        weather: [{ icon: '10d', description: 'rainy' }],
        wind: { speed: 5 },
      },
    }).as('getWeather');

    cy.intercept('GET', 'https://api.openweathermap.org/data/2.5/forecast*', {
      statusCode: 200,
      body: {
        city: { name: 'Test City' },
        list: [
          { dt_txt: '2025-02-14 12:00:00', weather: [{ icon: '10d', description: 'rainy' }], main: { temp: 300 } },
          { dt_txt: '2025-02-14 15:00:00', weather: [{ icon: '10d', description: 'cloudy' }], main: { temp: 295 } },
          { dt_txt: '2025-02-14 18:00:00', weather: [{ icon: '10d', description: 'sunny' }], main: { temp: 290 } },
        ],
      },
    }).as('getForecast');

    // Simulate login
    cy.contains('Iniciar con Google').click();

    
  });

  it('should log in with GitHub and display the weather panel', () => {
    // Interceptar las solicitudes de la API después del login
    cy.intercept('GET', 'https://api.openweathermap.org/data/2.5/weather*', {
      statusCode: 200,
      body: {
        name: 'Test City',
        main: {
          temp: 300,
          temp_max: 305,
          temp_min: 295,
          feels_like: 299,
          humidity: 80,
        },
        weather: [{ icon: '10d', description: 'rainy' }],
        wind: { speed: 5 },
      },
    }).as('getWeather');

    

    // Simulate login
    cy.contains('Iniciar con GitHub').click();

    
  });
});