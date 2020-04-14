// import React, { useState, useEffect } from "react";
// import CourseForm from "./CourseForm";
// import * as courseApi from "../api/courseApi";
// import { toast } from "react-toastify";

// const ManageCoursePage = (props) => {
//   const [errors, setErrors] = useState({});
//   const [course, setCourse] = useState({
//     id: null,
//     slug: "",
//     title: "",
//     authorId: null,
//     category: "",
//   });

//   useEffect(() => {
//     const slug = props.match.params.slug; // from the path `/courses/:slug`
//     if (slug) {
//       courseApi.getCourseBySlug(slug).then((_course) => setCourse(_course));
//     }
//     debugger;
//   }, [props.match.params.slug]);

//   function handleChange({ target }) {
//     setCourse({ ...course, [target.name]: target.value });
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     debugger;
//     if (!formIsValid()) return;
//     courseApi.saveCourse(course).then(() => {
//       props.history.push("/courses");
//       toast.success("Course saved.");
//     });
//   }

//   function formIsValid() {
//     const _errors = {};
//     if (!course.title) _errors.title = "Title is required";
//     if (!course.authorId) _errors.authorId = "Author ID is required";
//     if (!course.category) _errors.category = "Category is required";

//     setErrors(_errors);
//     // Form is valid if the errors object has no properties
//     return Object.keys(_errors) === 0;
//   }

//   return (
//     <>
//       <h2>Manage Course</h2>
//       <CourseForm
//         course={course}
//         errors={errors}
//         onChange={handleChange}
//         onSubmit={handleSubmit}
//       />
//     </>
//   );
// };

// export default ManageCoursePage;