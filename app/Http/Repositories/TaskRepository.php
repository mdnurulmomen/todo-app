<?php

namespace App\Http\Repositories;

use App\Models\Task;
use App\Http\Interfaces\TaskRepositoryInterface;

class TaskRepository implements TaskRepositoryInterface
{
    public function allTasks()
    {
        return Task::latest()->paginate(10);
    }

    public function storeTask($data)
    {
        return Task::create($data);
    }

    public function updateTask($data, Task $task)
    {
        $task->update($data);
    }

    public function destroyTask(Task $task)
    {
        $task->delete();
    }
}
