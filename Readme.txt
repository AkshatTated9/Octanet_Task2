#All Codes
#include <bits/stdc++.h>
using namespace std;



//adj_mat,n,0,visited
void dfs(int adj_mat[10][10],int n,int node,int visited[10])
{
	cout<<"DFS"<<endl;

//	return;
	stack<int> stk;
	stk.push(node);
	visited[node] = 1;

	while(!stk.empty()){
		int i = stk.top();
		stk.pop();
		cout<<i<<"-->";
		for(int j=n-1;j>=0;j--){
			if(adj_mat[i][j]==1 && visited[j]!=1){
				stk.push(j);
				visited[j] = 1;
			}
		}
	}
	cout<<"NULL"<<endl;

}

void bfs(int adj_mat[10][10],int n,int node,int visited[10])
{
	cout<<"BFS"<<endl;
//	return;

	queue<int> q;
	q.push(node);
	visited[node] = 1;

	while(!q.empty()){
		int i = q.front();
		q.pop();

		cout<<i<<"-->";
		for(int j=0;j<n;j++){
			if(adj_mat[i][j]==1 && visited[j]!=1){
				q.push(j);
				visited[j] = 1;
			}
		}
	}
	cout<<"NULL"<<endl;

}




int main() {

	int n;
	int adj_mat[10][10] = {0},visited[10] = {0};

	cout<<"Enter the total number of nodes in the graph --> ";
	cin>>n;


	for(int i=0;i<n;i++){
		for(int j=i+1;j<n;j++){
			cout<<"Do you want to add the Edge between "<<i<<" and "<<j<<"?. (Y or N) ";
			char s;	cin>>s;
			if(s=='y' || s=='Y'){
				adj_mat[i][j] = adj_mat[j][i] = 1;
			}
		}
	}

	int ch;
	do{

		cout<<"\n\n";
		cout<<"1. DFS"<<endl;
		cout<<"2. BFS"<<endl;
		cout<<"0. Exit"<<endl;
		cout<<"Enter Choice:- ";
		cin>>ch;
		switch(ch){
			case 1:
				for(int i=0;i<n;i++)	visited[i] = 0;
				cout<<"DFS on the given graph is :- ";
				dfs(adj_mat,n,0,visited);
				break;
			case 2:
				for(int i=0;i<n;i++)	visited[i] = 0;
				cout<<"BFS on the given graph is :- ";
				bfs(adj_mat,n,0,visited);
				break;
			case 0:
				break;
			default:
				cout<<"Invalid Choice \n\n";
			break;
		}

	}while(ch!=0);

	cout<<"Program Finished ";




	return 0;
}

------------------------------------------------------------------------------------------
#A * Algo

class Node:
    def __init__(self, data, level, fval):
        self.data = data
        self.level = level
        self.fval = fval
    
    def find(self, puz, x):
        for i in range(len(puz)):
            for j in range(len(puz)):
                if (puz[i][j] == x):
                    return i,j

    def copy(self):
        ans = []
        for i in self.data:
            t = []
            for j in i:
                t.append(j)
            ans.append(t)
        return ans

    def generate_child(self):
        ans = []
        x,y = self.find(self.data,'_')
        val_list = [[x, y+1], [x, y-1], [x+1, y], [x-1, y]]
        for i in val_list:
            if (i[0] >= 0 and i[0] < len(self.data) and i[1] >= 0 and i[1] < len(self.data)):
                t = self.copy()
                temp = t[x][y]
                t[x][y] = t[i[0]][i[1]]
                t[i[0]][i[1]] = temp

                child_node = Node(t, self.level+1, 0)
                ans.append(child_node)
        print("\n\n\n")
        return ans

class puzzle:
    def __init__(self, size):
        self.n = size
        self.open = []
        self.closed = []

    def accept(self):
        arr = []
        for i in range(self.n):
            t = input().split(" ")
            arr.append(t)
        return arr

    def display(self, data):
        for i in data:
            for j in i:
                print(j, end=" ")
            print()

    def displayArrow(self):
        print("\n\n-->")

    def f(self, start: Node, goal):
        return self.h(start.data, goal)+start.level

    def h(self, start, goal):
        ans = 0
        for i in range(self.n):
            for j in range(self.n):
                if (start[i][j] != goal[i][j] and start[i][j] != '_'):
                    ans += 1
        return ans

    def process(self):
        # Accept Start State and Goal State
        print("Enter The Start State:- \n")
        start = self.accept()
        print("Enter the Goal State:- \n")
        goal = self.accept()

        start = Node(start, 0, 0)
        start.fval = self.f(start, goal)
        self.open.append(start)

        print("="*30, "\n")

        while (True):
            curr = self.open[0]

            self.display(curr.data)
            self.displayArrow()

            if (self.h(curr.data, goal) == 0):
                break
            
            for i in curr.generate_child():
                i.fval = self.f(i, goal)
                self.open.append(i)

            self.closed.append(curr)
            del self.open[0]

            self.open.sort(key=lambda x: x.fval, reverse=False)


# -----------------------Main Program-----------------------#
puz = puzzle(3)
puz.process()


"""
1 2 3
_ 4 6
7 5 8

1 2 3
4 5 6
7 8 _

"""

------------------------------------------------------------------------------------------------
// Selection sort

#include<bits/stdc++.h>
using namespace std;
int main()
{
    int n;
    cout<<"Enter the total number of elements => ";
    cin>>n;
    
    vector<int> arr(n);
    
    cout<<"Enter "<<n<<" numbers:- \n";
    for(auto &i:arr){
        cin>>i;
    }
    
    for(int i=0;i<n-1;i++){
        int min = arr[i];
        int minPos = i;
        for(int j=i+1;j<n;j++){
            if(arr[j]<min){
                min = arr[j];
                minPos = j;
            }
        }
        
        int temp = arr[i];
        arr[i] = arr[minPos];
        arr[minPos] = temp;
    }
    
    cout<<"------ Sorted Array is ------ \n";
    for(auto &i:arr){
        cout<<i<<" ";
    }
    
    return 0;
}

-------------------------------------------------------------------------------------------------------
#include <iostream>
#include <vector>
#include <cmath>

using namespace std;

bool isSafe(int board[][10], int row, int col, int n) {
    // check if there is a queen in the same row
    for (int i = 0; i < n; i++) {
        if (board[row][i] == 1) {
            return false;
        }
    }
    // check if there is a queen in the same column
    for (int i = 0; i < n; i++) {
        if (board[i][col] == 1) {
            return false;
        }
    }
    // check if there is a queen on the diagonal
    for (int i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] == 1) {
            return false;
        }
    }
    for (int i = row, j = col; i >= 0 && j < n; i--, j++) {
        if (board[i][j] == 1) {
            return false;
        }
    }
    // it's safe to place a queen at (row, col)
    return true;
}

bool backtrack(int board[][10], int row, int n) {
    if (row == n) {
        return true;
    }
    for (int col = 0; col < n; col++) {
        if (isSafe(board, row, col, n)) {
            board[row][col] = 1;
            if (backtrack(board, row+1, n)) {
                return true;
            }
            board[row][col] = 0; // backtrack
        }
    }
    return false;
}

int main() {
    int n;
    cout << "Enter the size of the chessboard: ";
    cin >> n;
    
    int board[10][10] = {0};
    if (backtrack(board, 0, n)) {
        // print the first solution found
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if(board[i][j] == 0){
                    cout << "_  ";
                }
                else{
                    cout << "Q  ";
                }
                // cout << board[i][j] << " ";
            }
            cout << endl;
        }
    } else {
        cout << "No solution found." << endl;
    }
    
    return 0;
}
------------------------------------------------------------------------------------------------
#Chatbot 
import time

# Define menu with prices in rupees
menu = {
    "pepperoni": 799,
    "margherita": 699,
    "veggie": 749,
    "meat lovers": 999,
    "hawaiian": 899
}

# Define payment methods
payment_methods = ["cash on delivery", "online payment", "upi", "card payment"]

# Define function for ordering
def order_pizza():
    # Display menu to user
    print("\n\nWelcome to Yogesh Pizzas!")
    print("Here's our menu:")
    for item in menu:
        print(f"{item.title()} - Rs.{menu[item]}")
    print("\n\n")
   
    # Get user input for pizza choice
    pizza_choice = input("What would you like to order? ").lower()

    # Check if pizza choice is valid
    while pizza_choice not in menu:
        pizza_choice = input("Sorry, we don't have that on our menu. Please choose something else: ").lower()

    # Get user input for payment method
    payment_choice = input("How would you like to pay? ").lower()

    # Check if payment method is valid
    while payment_choice not in payment_methods:
        payment_choice = input("Sorry, we don't accept that payment method. Please choose something else: ").lower()

    # Calculate total cost of pizza
    total_cost = menu[pizza_choice]

    # Generate receipt
    print("Generating receipt...")
    time.sleep(2)
    print("\n\n")
    print(f"You ordered a {pizza_choice.title()} pizza from Yogesh Pizzas for Rs.{menu[pizza_choice]}.")
    print(f"Your total cost is Rs.{total_cost}.")
    print(f"Payment method: {payment_choice.title()}.")
    print("Thank you for your order!")

# Call the order_pizza function to start the chatbot
order_pizza()

----------------------------------------------------------------------------------------

#expert System

#include<bits/stdc++.h>
#include<conio.h>
using namespace std;
/*

    predicates
        proposition(name, diesease); 
        symptom(name,indication);


*/

class MedicalDignosis{
public:
    string name;
    int age;
    map<string,bool> mp;
    
    void acceptDetails(){
        cout<<"What is the name of patient ? ==>  ";
        cin>>this->name;
        cout<<"\n";
        cout<<"What is Age of "<<name<<" ? ==> ";
        cin>>this->age;           
    }


    void symptom(string patient,string symp){
        char choice;
        cout<<"Does "<<patient<<" have a "<<symp<<" (y/n) ?  ";
        cin>>choice;
        if(choice=='y' || choice=='Y'){
            mp[symp] = true ;
        }
        else{
            mp[symp] = false;
        }
    }

    bool isinfected(string symp){
        return mp[symp];
    }

    bool proposition(string diesease){
        if(diesease=="measles"){
            return (isinfected("fever") &&
                    isinfected("cough") &&
                    isinfected("conjuctivities") &&
                    isinfected("runny_nose") &&
                    isinfected("rash")); 
        }
        else if(diesease=="german_measles"){
            return (isinfected("fever") &&
                    isinfected("headache") &&
                    isinfected("runny_nose") &&
                    isinfected("rash"));
        }
        else if(diesease=="flu"){
             return (isinfected("fever") && 
                    isinfected("headache") && 
                    isinfected("body_ahce") && 
                    isinfected("conjuctivities") && 
                    isinfected("chills") && 
                    isinfected("soar_throat") && 
                    isinfected("cough") && 
                    isinfected("runny_nose"));
        }
        else if(diesease=="common_cold"){
            return (isinfected("headache") &&
                    isinfected("sneezing") &&
                    isinfected("soar_throat") &&
                    isinfected("chills") &&
                    isinfected("runny_nose"));
        }
        else if(diesease=="mumps"){
            return (isinfected("fever") &&
                    isinfected("swollen_glands"));
        }
        else if(diesease=="chicken_pox"){
            return (isinfected("fever") &&
                    isinfected("rash") &&
                    isinfected("body_ahce") &&
                    isinfected("chills"));
        }
        else if(diesease=="whooping_cough"){
            return (isinfected("cough") &&
                    isinfected("sneezing") &&
                    isinfected("runny_nose"));
        }
        return false;
    }

    void conclude(string name,string diesease){
        cout<<"\n"<<name<<" probably has "<<diesease<<endl;
    }

};


int main()
{
    
    cout<<"\n\n\n";

    MedicalDignosis obj;
    obj.acceptDetails();
    

    obj.symptom(obj.name,"fever");
    obj.symptom(obj.name,"rash");
    obj.symptom(obj.name,"headache");
    obj.symptom(obj.name,"runny_nose");
    obj.symptom(obj.name,"conjuctivities");
    obj.symptom(obj.name,"cough");
    obj.symptom(obj.name,"body_ahce");
    obj.symptom(obj.name,"chills");
    obj.symptom(obj.name,"soar_throat");
    obj.symptom(obj.name,"sneezing");
    obj.symptom(obj.name,"swollen_glands");


    bool nothingDetected = true;

    if(obj.proposition("measles")){
        obj.conclude(obj.name,"measles");
        nothingDetected =false; 
    }
    if(obj.proposition("german_measles")){
        obj.conclude(obj.name,"german_measles");
        nothingDetected =false; 
    }
    if(obj.proposition("flu")){
        obj.conclude(obj.name,"flu");
        nothingDetected =false; 
    }
    if(obj.proposition("common_cold")){
        obj.conclude(obj.name,"common_cold");
        nothingDetected =false; 
    }
    if(obj.proposition("mumps")){
        obj.conclude(obj.name,"mumps");
        nothingDetected =false; 
    }
    if(obj.proposition("chicken_pox")){
        obj.conclude(obj.name,"chicken_pox");
        nothingDetected =false; 
    }
    if(obj.proposition("whooping_cough")){
        obj.conclude(obj.name,"whooping_cough");
        nothingDetected =false; 
    }
    if(nothingDetected){
        cout<<"\nI am sorry i am unable to identify the diesease ...";
    }
    
    cout<<"\n\n";
    cout<<"PRESS ANY KEY TO EXIT";
    getch();


}

---------------------------------------------------------------------------------
#Binary Search
#include <iostream>
using namespace std;

int main()
{
    int n;
    cout<<"Enter the size of array =>";
    cin>>n;
    
    int arr[n];
    cout<<"Enter "<<n<<" Integers in ascending order => \n";
    for(int i=0;i<n;i++)
        cin>>arr[i];    
    
    int target;
    cout<<"Enter the number you want to search => ";
    cin>>target;
    
    int start = 0, end = n-1, mid;
    int pos= -1;
    
    while(start<=end)
    {
        mid = (start+end)/2;
        
        if(arr[mid]==target){
            pos = mid;
            break;
        }
        else if(arr[mid]>target)
            end = mid -1;   
        else
            start = mid + 1;
    }
    
    if(pos==-1)
        cout<<target<<" is not present in the array"<<endl;
    else
        cout<<target<<" is present in the array at position "<<pos<<endl;
        
    return 0;
}

---------------------------------------------------------------------------------

#Apex


public class Calculator {
    public integer add(integer a,integer b){
        return a+b;
    }
    

    public integer sub(integer a,integer b){
        return a-b;

    }
    public integer mul(integer a,integer b){
        return a*b;
    }
    public integer div(integer a,integer b){
        return a/b; 
    }   
}









Calculator c = new Calculator();
system.debug('the addition'+c.add(20,10));
system.debug('the substraction'+c.sub(20,10));
system.debug('the multiplication'+c.mul(20,10));
system.debug('the division'+c.div(20,10));
