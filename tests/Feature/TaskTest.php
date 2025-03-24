<?php

namespace Tests\Feature;

use App\Models\Task;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Laravel\Sanctum\Sanctum;


class TaskTest extends TestCase
{
    use RefreshDatabase, WithFaker;
    public function test_can_get_all_tasks()
    {
        Sanctum::actingAs(User::factory()->create(), ['*']);

        Task::truncate();
        Task::factory()->count(3)->create();

        $response = $this->getJson('/api/v1/tasks');

        $response->assertJsonCount(3, 'data');
    }

    public function test_can_create_a_task()
    {
        Sanctum::actingAs(User::factory()->create(), ['*']);

        Task::truncate();

        $taskData = [
            'title' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'status' => rand(0,1)
        ];

        $response = $this->postJson('/api/v1/tasks', $taskData);

        $response->assertJsonCount(1, 'data');

        $this->assertDatabaseHas('tasks', $taskData);
    }

    public function test_can_update_a_task()
    {
        Sanctum::actingAs(User::factory()->create(), ['*']);

        Task::truncate();
        $task = Task::factory()->create();

        $updatedData = [
            'title' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'status' => rand(0,1)
        ];

        $this->putJson("/api/v1/tasks/{$task->id}", $updatedData);

        $this->assertDatabaseHas('tasks', $updatedData);
    }

    public function test_can_delete_a_task()
    {
        Sanctum::actingAs(User::factory()->create(), ['*']);

        Task::truncate();
        $task = Task::factory()->create();

        $this->deleteJson("/api/v1/tasks/{$task->id}");

        $this->assertDatabaseMissing('tasks', ['id' => $task->id]);
    }

    public function test_task_validation() {
        Sanctum::actingAs(User::factory()->create(), ['*']);

        $response = $this->postJson('/api/v1/tasks', []);

        $response->assertStatus(422)
            ->assertJsonValidationErrors(['title', 'description']);
    }
}
