import configureStore from "redux-mock-store";
import { initialState } from "@/store/intialState";
import sinon from "sinon";
const mockStore = configureStore();

describe("App", () => {
	it("returns the initial state", () => {
		const initialState = {
			allCarsList: [],
			updatedCarsList: [],
			filter: "all",
		};
		const store = mockStore(initialState);

		expect(store.getState()).to.equal(initialState);
	});

	it("should throw an error when the action is not a plain object", () => {
		const store = mockStore({});

		expect(() => {
			store.dispatch(() => {});
		}).to.throw(
			"Actions must be plain objects. " +
				"Use custom middleware for async actions."
		);
	});
	
	describe("if it is a function", () => {
		it("returns the result of getState call", () => {
			const getState = sinon.spy();
			const store = mockStore(getState);

			store.getState();
			expect(getState.called).to.be.true;
		});

		it("returns the result of getState call with actions", () => {
			const action = { type: "ADD_ITEM" };
			const getState = sinon.spy();
			const store = mockStore(getState);

			store.dispatch(action);
			store.getState();
			expect(getState.calledWith([action])).to.be.true;
			expect(getState.calledWith(store.getActions())).to.be.true;
		});
	});
});
