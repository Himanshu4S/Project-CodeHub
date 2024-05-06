const sampleListings = [
  {
    user: "JohnDoe",
    title: "Java Bubble Sort",
    type: "Java",
    code: 'public class BubbleSort {\n\tpublic static void main(String[] args) {\n\t\tint[] arr = {5, 2, 8, 1, 3};\n\t\tint n = arr.length;\n\t\tfor (int i = 0; i < n-1; i++) {\n\t\t\tfor (int j = 0; j < n-i-1; j++) {\n\t\t\t\tif (arr[j] > arr[j+1]) {\n\t\t\t\t\tint temp = arr[j];\n\t\t\t\t\tarr[j] = arr[j+1];\n\t\t\t\t\tarr[j+1] = temp;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tfor (int num : arr) {\n\t\t\tSystem.out.print(num + " ");\n\t\t}\n\t}\n}',
  },
  {
    user: "JaneSmith",
    title: "C++ Factorial",
    type: "C++",
    code: '#include <iostream>\n\nint factorial(int n) {\n\tif (n <= 1)\n\t\treturn 1;\n\treturn n * factorial(n - 1);\n}\n\nint main() {\n\tint n = 5;\n\tstd::cout << "Factorial of " << n << " is " << factorial(n) << std::endl;\n\treturn 0;\n}',
  },
  {
    user: "AliceJohnson",
    title: "Python Fibonacci Series",
    type: "Python",
    code: "def fibonacci(n):\n\tif n <= 1:\n\t\treturn n\n\telse:\n\t\treturn fibonacci(n-1) + fibonacci(n-2)\n\nnterms = 10\nfor i in range(nterms):\n\tprint(fibonacci(i))",
  },
  {
    user: "JohnDoe",
    title: "Java Linear Search",
    type: "Java",
    code: 'public class LinearSearch {\n\tpublic static int search(int[] arr, int key) {\n\t\tfor (int i = 0; i < arr.length; ++i) {\n\t\t\tif (arr[i] == key)\n\t\t\t\treturn i;\n\t\t}\n\t\treturn -1;\n\t}\n\n\tpublic static void main(String[] args) {\n\t\tint[] arr = {12, 45, 23, 6, 78};\n\t\tint key = 6;\n\t\tint result = search(arr, key);\n\t\tif (result == -1)\n\t\t\tSystem.out.println("Element not found");\n\t\telse\n\t\t\tSystem.out.println("Element found at index: " + result);\n\t}\n}',
  },
  {
    user: "JaneSmith",
    title: "C++ Binary Search",
    type: "C++",
    code: '#include <iostream>\n\nint binarySearch(int arr[], int left, int right, int key) {\n\twhile (left <= right) {\n\t\tint mid = left + (right - left) / 2;\n\t\tif (arr[mid] == key)\n\t\t\treturn mid;\n\t\tif (arr[mid] < key)\n\t\t\tleft = mid + 1;\n\t\telse\n\t\t\tright = mid - 1;\n\t}\n\treturn -1;\n}\n\nint main() {\n\tint arr[] = {2, 3, 4, 10, 40};\n\tint n = sizeof(arr) / sizeof(arr[0]);\n\tint key = 10;\n\tint result = binarySearch(arr, 0, n - 1, key);\n\t(result == -1) ? std::cout << "Element not present in array" : std::cout << "Element found at index: " << result;\n\treturn 0;\n}',
  },
  {
    user: "AliceJohnson",
    title: "Python Binary Search",
    type: "Python",
    code: "def binary_search(arr, left, right, x):\n\twhile left <= right:\n\t\tmid = left + (right - left) // 2\n\t\tif arr[mid] == x:\n\t\t\treturn mid\n\t\telif arr[mid] < x:\n\t\t\tleft = mid + 1\n\t\telse:\n\t\t\tright = mid - 1\n\treturn -1\n\narr = [2, 3, 4, 10, 40]\nx = 10\nresult = binary_search(arr, 0, len(arr)-1, x)\nif result != -1:\n\tprint('Element is present at index', result)\nelse:\n\tprint('Element is not present in array')",
  },
  {
    user: "JohnDoe",
    title: "Java Stack Implementation",
    type: "Java",
    code: 'import java.util.Stack;\n\npublic class StackExample {\n\tpublic static void main(String[] args) {\n\t\tStack<Integer> stack = new Stack<>();\n\t\tstack.push(1);\n\t\tstack.push(2);\n\t\tstack.push(3);\n\t\tSystem.out.println("Stack: " + stack);\n\t\tint top = stack.pop();\n\t\tSystem.out.println("Popped element: " + top);\n\t\tSystem.out.println("Stack after pop: " + stack);\n\t}\n}',
  },
  {
    user: "JaneSmith",
    title: "C++ Queue Implementation",
    type: "C++",
    code: '#include <iostream>\n#include <queue>\n\nint main() {\n\tstd::queue<int> q;\n\tq.push(1);\n\tq.push(2);\n\tq.push(3);\n\tstd::cout << "Queue size: " << q.size() << std::endl;\n\tstd::cout << "Front element: " << q.front() << std::endl;\n\tq.pop();\n\tstd::cout << "Queue size after pop: " << q.size() << std::endl;\n\treturn 0;\n}',
  },
  {
    user: "AliceJohnson",
    title: "Python Queue Implementation",
    type: "Python",
    code: "from queue import Queue\n\nq = Queue()\nq.put(1)\nq.put(2)\nq.put(3)\nprint('Queue size:', q.qsize())\nprint('Front element:', q.queue[0])\nq.get()\nprint('Queue size after get:', q.qsize())",
  },
  {
    user: "JohnDoe",
    title: "Java Linked List Implementation",
    type: "Java",
    code: 'class Node {\n\tint data;\n\tNode next;\n\n\tpublic Node(int data) {\n\t\tthis.data = data;\n\t\tnext = null;\n\t}\n}\n\npublic class LinkedList {\n\tNode head;\n\n\tpublic void printList() {\n\t\tNode temp = head;\n\t\twhile (temp != null) {\n\t\t\tSystem.out.print(temp.data + " ");\n\t\t\ttemp = temp.next;\n\t\t}\n\t\tSystem.out.println();\n\t}\n\n\tpublic static void main(String[] args) {\n\t\tLinkedList list = new LinkedList();\n\t\tlist.head = new Node(1);\n\t\tlist.head.next = new Node(2);\n\t\tlist.head.next.next = new Node(3);\n\t\tlist.printList();\n\t}\n}',
  },
  {
    user: "JaneSmith",
    title: "C++ Linked List Implementation",
    type: "C++",
    code: '#include <iostream>\n\nclass Node {\n\tpublic:\n\t\tint data;\n\t\tNode* next;\n\t\tNode(int data) {\n\t\t\tthis->data = data;\n\t\t\tnext = nullptr;\n\t\t}\n};\n\nclass LinkedList {\n\tpublic:\n\t\tNode* head;\n\t\tvoid printList() {\n\t\t\tNode* temp = head;\n\t\t\twhile (temp != nullptr) {\n\t\t\t\tstd::cout << temp->data << " ";\n\t\t\t\ttemp = temp->next;\n\t\t\t}\n\t\t\tstd::cout << std::endl;\n\t\t}\n};\n\nint main() {\n\tLinkedList list;\n\tlist.head = new Node(1);\n\tlist.head->next = new Node(2);\n\tlist.head->next->next = new Node(3);\n\tlist.printList();\n\treturn 0;\n}',
  },
  {
    user: "AliceJohnson",
    title: "Python Linked List Implementation",
    type: "Python",
    code: "class Node:\n\tdef __init__(self, data):\n\t\tself.data = data\n\t\tself.next = None\n\nclass LinkedList:\n\tdef __init__(self):\n\t\tself.head = None\n\tdef printList(self):\n\t\ttemp = self.head\n\t\twhile temp:\n\t\t\tprint(temp.data, end=' ')\n\t\t\ttemp = temp.next\n\t\tprint()\n\nlist = LinkedList()\nlist.head = Node(1)\nlist.head.next = Node(2)\nlist.head.next.next = Node(3)\nlist.printList()",
  },
];
module.exports = { data: sampleListings };
