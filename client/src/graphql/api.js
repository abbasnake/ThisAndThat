import Queries from './queries';

const Api = () => {
  const fetchDefault = queryData => {
    const URL = 'http://localhost:5000/graphql';
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    const body = JSON.stringify(queryData);

    return fetch(URL, { method: 'POST', headers, body });
  }

  const makeRequest = async (query, variables = false) => {
    try {
      const data = await fetchDefault({ query, variables });
      const json = await data.json();

      if (json.errors) throw new Error(json.errors[0].message);

      return json;
    } catch (error) {
      console.error('graphql -> api -> makeRequest: ', error)
      return { error: true, message: error }
    }
  }

  const todoLists = () => makeRequest(Queries.todoLists);
  const addNewTodoList = variables => makeRequest(Queries.addNewTodoList, variables);
  const deleteTodoList = variables => makeRequest(Queries.deleteTodoList, variables);
  const addNewTodoToList = variables => makeRequest(Queries.addNewTodoToList, variables);
  const deleteTodoFromList = variables => makeRequest(Queries.deleteTodoFromList, variables);
  const editTodoTitle = variables => makeRequest(Queries.editTodoTitle, variables);
  const editTodoListTitle = variables => makeRequest(Queries.editTodoListTitle, variables);
  const toggleTodoCompletionStatus = variables => makeRequest(Queries.toggleTodoCompletionStatus, variables);
  const toggleTodoListCompletionStatus = variables => makeRequest(Queries.toggleTodoListCompletionStatus, variables);
  const toggleOpenCloseTodoList = variables => makeRequest(Queries.toggleOpenCloseTodoList, variables);

  return {
    todoLists,
    addNewTodoList,
    deleteTodoList,
    addNewTodoToList,
    deleteTodoFromList,
    editTodoTitle,
    editTodoListTitle,
    toggleTodoCompletionStatus,
    toggleTodoListCompletionStatus,
    toggleOpenCloseTodoList
  }
}

export default Api();