let students = [
    {
        id: 1,
        name: "Ali",
        email: "ali@gmail.com",
        course: "JavaScript"
    },
    {
        id: 2,
        name: "Sara",
        email: "sara@gmail.com",
        course: "HTML & CSS"
    },
    {
        id: 3,
        name: "Ahmed",
        email: "ahmed@gmail.com",
        course: "React JS"
    },
    {
        id: 4,
        name: "Ayesha",
        email: "ayesha@gmail.com",
        course: "Node JS"
    },
    {
        id: 5,
        name: "Usman",
        email: "usman@gmail.com",
        course: "MongoDB"
    },
    {
        id: 6,
        name: "Fatima",
        email: "fatima@gmail.com",
        course: "Express JS"
    },
    {
        id: 7,
        name: "Hamza",
        email: "hamza@gmail.com",
        course: "Python"
    },
    {
        id: 8,
        name: "Zara",
        email: "zara@gmail.com",
        course: "Data Structures"
    },
    {
        id: 9,
        name: "Bilal",
        email: "bilal@gmail.com",
        course: "Java"
    },
    {
        id: 10,
        name: "Hina",
        email: "hina@gmail.com",
        course: "C++"
    }
];

let editStudentId = null;

const modal = document.getElementById("studentModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModal = document.getElementById("closeModal");

const studentForm = document.getElementById("studentForm");
const createBtn = document.getElementById("createStudentBtn");
const updateBtn = document.getElementById("updateStudentBtn");

const tableBody = document.getElementById("studentTableBody");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const courseInput = document.getElementById("course");

function renderStudents() {

    tableBody.innerHTML = "";

    students.forEach(student => {

        tableBody.innerHTML += `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>${student.course}</td>
                <td>
                    <button class="edit-btn" onclick="editStudent(${student.id})">Edit</button>
                    <button class="delete-btn" onclick="deleteStudent(${student.id})">Delete</button>
                </td>
            </tr>
        `;
    });
}

openModalBtn.addEventListener("click", () => {

    studentForm.reset();
    editStudentId = null;

    createBtn.style.display = "inline-block";
    updateBtn.style.display = "none";

    modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

studentForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const student = {
        id: Date.now(),
        name: nameInput.value,
        email: emailInput.value,
        course: courseInput.value
    };

    students.push(student);

    renderStudents();

    modal.style.display = "none";
    studentForm.reset();
});

function editStudent(id) {

    const student = students.find(s => s.id === id);

    editStudentId = id;

    nameInput.value = student.name;
    emailInput.value = student.email;
    courseInput.value = student.course;

    createBtn.style.display = "none";
    updateBtn.style.display = "inline-block";

    modal.style.display = "block";
}

updateBtn.addEventListener("click", () => {

    const student = students.find(s => s.id === editStudentId);

    student.name = nameInput.value;
    student.email = emailInput.value;
    student.course = courseInput.value;

    renderStudents();

    modal.style.display = "none";
    studentForm.reset();
});

function deleteStudent(id) {

    const confirmDelete = confirm("Are you sure you want to delete this student?");

    if (confirmDelete) {

        students = students.filter(student => student.id !== id);

        renderStudents();
    }
}

renderStudents();