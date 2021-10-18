

// import start  from "./index";

// describe('My Test', () => {
// 	let sut: { pressed: any; };
// 	let events = {};

// 	beforeEach(() => {
// 		sut = new start();

// Empty our events before each test case
// 		events = {};

// Define the addEventListener method with a Jest mock function
// 		document.addEventListener = jest.fn((event, callback) => {
//       events[event] = callback;
//     });
// 	});

// 	test('Test Keypress fires callback', () => {
         // Watch the function that gets called when our event fires
//         jest.spyOn(sut, 'load');
        
     // A method inside of our dependency that sets up event listeners
	// sut.setupEvents();

        // We fired an event, so this should have been called
//         expect(sut.pressed).toHaveBeenCalled();
// 	});
// });

// window.addEventListener = jest.fn();
const getCountries = jest.fn();

describe('start', () => {
  const windowLoadEvent = new Event("load");
  window.dispatchEvent(windowLoadEvent);

  test('open window', () => {
    
    // start();
    // window.dispatchEvent(windowLoadEvent);

    expect(window.addEventListener).toHaveBeenCalledWith(1, "load", () => {});
    expect(getCountries).toHaveBeenCalled()
  })
})

// test('Runs without crashing', () => {
//   start();
// });
