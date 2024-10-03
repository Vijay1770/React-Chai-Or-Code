import { useEffect, useState } from "react";
import { postData, updateData } from "../api/PostApi";

export const Form = ({ data, setData, updateDataApi, setUpdateDataApi }) => {
  // State to store form data (for both adding and updating posts)
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });

  // Check if updateDataApi is empty or not. This helps to decide if we are adding or editing.
  const isEmpty = Object.keys(updateDataApi).length === 0;

  // If we are updating (i.e. updateDataApi is not empty), load the existing post data into the form fields
  useEffect(() => {
    if (!isEmpty) {
      setAddData({
        title: updateDataApi.title || "",
        body: updateDataApi.body || "",
      });
    }
  }, [updateDataApi]);

  // Handle form input change (update the title or body in the form)
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAddData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // **Post Data Logic (Adding new data)**
  const addPostData = async () => {
    const res = await postData(addData); // Call API to add new post
    console.log("New Post Response:", res); // Logging the response for added post

    if (res.status === 201) {
      // If post is successful, update the UI and reset the form
      setData([...data, res.data]); // Add new post to the current data
      setAddData({ title: "", body: "" }); // Clear form after adding
    }
  };

  // **Update Data Logic (Editing existing data)**
  const updatePostData = async () => {
    try {
      const res = await updateData(updateDataApi.id, addData); // Call API to update existing post
      console.log("Updated Post Response:", res); // Logging the response for updated post

      // Update the data in the UI with the updated post information
      setData((prev) =>
        prev.map(
          (curElem) => (curElem.id === res.data.id ? res.data : curElem) // If post id matches, update it; otherwise, leave it as is
        )
      );

      // Clear the form after editing
      setAddData({ title: "", body: "" });
      setUpdateDataApi({}); // Reset the update data object to indicate editing is done
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  // Handle form submission (add new post or update existing one)
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const action = e.nativeEvent.submitter.value; // Identify which action (Add or Edit) was clicked

    // Check if we are adding or editing, and call the appropriate function
    if (action === "Add") {
      addPostData(); // Call the function to add a new post
    } else if (action === "Edit") {
      updatePostData(); // Call the function to update an existing post
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {/* Title Input */}
      <div>
        <label htmlFor="title"></label>
        <input
          type="text"
          autoComplete="off"
          id="title"
          name="title"
          placeholder="Add Title"
          value={addData.title} // Form field bound to title state
          onChange={handleInputChange} // Update state when user types
        />
      </div>

      {/* Body Input */}
      <div>
        <label htmlFor="body"></label>
        <input
          type="text"
          autoComplete="off"
          placeholder="Add Post"
          id="body"
          name="body"
          value={addData.body} // Form field bound to body state
          onChange={handleInputChange} // Update state when user types
        />
      </div>

      {/* Button toggles between Add and Edit depending on whether we are adding or editing */}
      <button type="submit" value={isEmpty ? "Add" : "Edit"}>
        {isEmpty ? "Add" : "Edit"}
      </button>
    </form>
  );
};