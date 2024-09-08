<?php

namespace App\Http\Controllers;

use App\Models\Department;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class DepartmentController extends Controller
{
    public function index()
    {
        $departments = Department::all();
        return response()->json($departments);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'code' => 'required|string|unique:departments',
            'description' => 'nullable|string',
            'head_of_department' => 'nullable|string',
            'phone_number' => 'nullable|string',
            'email' => 'nullable|email',
            'is_active' => 'boolean',
        ]);

        $department = Department::create($validatedData);
        return response()->json($department, Response::HTTP_CREATED);
    }

    public function show(Department $department)
    {
        return response()->json($department);
    }

    public function update(Request $request, Department $department)
    {
        $validatedData = $request->validate([
            'name' => 'string|max:255',
            'code' => 'string|unique:departments,code,' . $department->id,
            'description' => 'nullable|string',
            'head_of_department' => 'nullable|string',
            'phone_number' => 'nullable|string',
            'email' => 'nullable|email',
            'is_active' => 'boolean',
        ]);

        $department->update($validatedData);
        return response()->json($department);
    }

    public function destroy(Department $department)
    {
        $department->delete();
        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
