import { useReducer } from "react"

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value
  }
}

const Form = () => {
  const [formData, setFormData] = useReducer(formReducer,{})

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }
  return (
    <form className="max-w-md mx-auto mt-8 bg-white rounded-md shadow-md overflow-hidden" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4 px-6 py-4">
        <div className="flex flex-col">
          <label htmlFor="firstname" className="text-gray-600 mb-1">
            First Name
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            onChange={setFormData}
            className="border-gray-400 border-2 py-2 px-3 rounded-md focus:outline-none focus:border-green-500"
            placeholder="Enter first name"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastname" className="text-gray-600 mb-1">
            Last Name
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            onChange={setFormData}
            className="border-gray-400 border-2 py-2 px-3 rounded-md focus:outline-none focus:border-green-500"
            placeholder="Enter last name"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-600 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={setFormData}
            className="border-gray-400 border-2 py-2 px-3 rounded-md focus:outline-none focus:border-green-500"
            placeholder="Enter email"
          />
        </div>

        <div class="flex flex-col">
          <label for="birthday" class="text-gray-600 mb-1">
            Birthday
          </label>
          <input
            type="date"
            name="birthday"
            id="birthday"
            onChange={setFormData}
            className="border-gray-400 border-2 py-2 px-3 rounded-md focus:outline-none focus:border-green-500"
            placeholder="Enter birthday"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="salary" className="text-gray-600 mb-1">
            Salary
          </label>
          <input
            type="number"
            name="salary"
            id="salary"
            onChange={setFormData}
            className="border-gray-400 border-2 py-2 px-3 rounded-md focus:outline-none focus:border-green-500"
            placeholder="Enter salary"
          />
        </div>
      </div>
      <div className="flex flex-col px-6 py-4">
        <label className="text-gray-600 mb-2">Status</label>
        <div className="flex items-center mb-2">
          <input
            type="radio"
            name="status"
            value="active"
            id="radioDefault1"
            onChange={setFormData}
            className="form-radio border-gray-400 h-4 w-4 transition duration-200 focus:outline-none focus:border-green-500 checked:bg-green-500 checked:border-green-500 mr-2"
          />
          <label htmlFor="radioDefault1" className="text-gray-800">
            Active
          </label>
        </div>
        <div className="flex items-center mb-2">
          <input
            type="radio"
            name="status"
            value="inactive"
            id="radioDefault2"
            onChange={setFormData}
            className="form-radio border-gray-400 h-4 w-4 transition duration-200 focus:outline-none focus:border-green-500 checked:bg-green-500 checked:border-green-500 mr-2"
          />
          <label htmlFor="radioDefault2" className="text-gray-800">
            Inactive
          </label>
        </div>
      </div>
      <div className="flex justify-center px-6 py-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200">
          Add
        </button>
      </div>
    </form>
  );
};

export default Form;
