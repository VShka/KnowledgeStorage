export default function deleteCategory(id) {
  return fetch(`https://knowledge-tree.herokuapp.com/api/v1/titles/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: id
  });
}
