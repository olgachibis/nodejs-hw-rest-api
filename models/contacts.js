const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "db", "contacts.json");

const listContacts = async () => {
  try {
  const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
   } catch (error) {
    console.error("Error reading contacts file:", error);
    throw error;
  }
}

const getContactById = async (id) => {
  try {
  const contacts = await listContacts();
  const result = contacts.find((item) => item.id === id);
  return result || null;
 } catch (error) {
    console.error("Error getting contact by ID:", error);
    throw error;
  }
}


const addContact = async ({ name, email, phone }) => {
  try {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
} catch (error) {
    console.error("Error adding contact:", error);
    throw error;
  }
}

const removeContact = async (id) => {
  try {
const contacts = await listContacts();
const index = contacts.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  const [result] = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return result;
 } catch (error) {
    console.error("Error removing contact:", error);
    throw error;
  }
}

const updateContactById = async (id, data) => {
  try {
  const contacts = await listContacts();
  const index = contacts.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  contacts[index] = { id, ...data };
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return contacts[index];
} catch (error) {
    console.error("Error updating contact:", error);
    throw error;
  }
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContactById,
};