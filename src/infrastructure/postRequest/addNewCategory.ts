export default function addNewCategory(category) {
  return fetch("https://knowledge-tree.herokuapp.com/api/v1/titles/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify(category)
  });
}
