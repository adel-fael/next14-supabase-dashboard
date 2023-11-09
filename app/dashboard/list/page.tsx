import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"

import { z } from "zod"

import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"

import { taskSchema } from "./data/schema"

export const metadata: Metadata = {
  title: "List",
  description: "A list of demos using Tanstack Table.",
}

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "app/dashboard/list/data/tasks.json")
  )

  const tasks = JSON.parse(data.toString())

  return z.array(taskSchema).parse(tasks)
}

const ListPage = async () => {
  const tasks = await getTasks()

  return (
    
      <div className=" flex-1 flex-col space-y-8 p-8 md:flex">

        <DataTable data={tasks} columns={columns} />
      </div>
  )
};

export default ListPage;