<?php
namespace App\Http\Interfaces;

use App\Models\Task;

Interface TaskRepositoryInterface{
    public function allTasks();
    public function storeTask($data);
    public function updateTask($data, Task $task);
    public function destroyTask(Task $task);
}
