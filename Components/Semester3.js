import React, {Component} from 'react';
import {View, Text, Button, ScrollView, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Accordian3 from './Accordian3';

const Semester3Stack = createStackNavigator();
const Semester3StackScreen = ({navigation}) => {
  return (
    <Semester3Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'gold',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Semester3Stack.Screen name="Semester3" component={Semester3Screen} />
    </Semester3Stack.Navigator>
  );
};
export default Semester3StackScreen;
class Semester3Screen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: [
        {},
        {
          id: '01',
          title:
            'Q1. Write a C program to find union and intersection of two given singly linked lists. Order of elements in output lists doesn’t matter.',
          data: `#include<stdio.h>
          #include<stdlib.h>
          typedef struct node
          {
              int info;
              struct node *next;
          }node;
          void push(node **,int); //Push function
          node *get_union(node *,node *);
          node *get_intersection(node *,node *);
          void display(node *);  //Display function
          int main()
          {
              node *top1=NULL,*top2=NULL,*uni=NULL,*intersect=NULL;
              int choice,num;
              char ch;
              printf("Press 1 for pushing element in 1st list. Press 2 for pushing element in 2nd list. Press 3 for union. Press 4 for intersection. Press 5 for displaying 1st list. Press 6 for displaying 2nd list. Press 7 for displaying union. Press 8 for displaying intersection.");
              do
              {
                  printf("Enter your choice:- ");
                  scanf("%d",&choice);
                  switch(choice)
                  {
                      case 1:
                          printf("Enter the number to be pushed : - ");
                          scanf("%d",&num);
                          push(&top1,num);
                          break;
                      case 2:
                          printf("Enter the number to be pushed : - ");
                          scanf("%d",&num);
                          push(&top2,num);
                          break;
                      case 3:
                          uni=get_union(top1,top2);
                          break;
                      case 4:
                          intersect=get_intersection(top1,top2);
                          break;
                      case 5:
                          if(top1==NULL)
                          {
                              printf("No elements");
                          }
                          else
                              display(top1);
                          break;
                      case 6:
                          if(top2==NULL)
                          {
                              printf("No elements");
                          }
                          else
                              display(top2);
                          break;
                      case 7:
                          if(uni==NULL)
                          {
                              printf("No elements");
                          }
                          else
                              display(uni);
                          break;
                      case 8:
                          if(intersect==NULL)
                          {
                              printf("No elements");
                          }
                          else
                              display(intersect);
                          break;
                      default: printf("Invalid choice");
                  }
                  printf("Do you want to continue?");
                  fflush(stdin);
                  scanf("%c",&ch);
              }while(ch=='Y'||ch=='y');
              return 0;
          }
          void push(node **top,int num) //Push function is defined.
          {
              node *ptr;
              ptr=(struct node*)malloc(sizeof(struct node));
              if(ptr==NULL)
              {
                  printf("Not enough memory");
              }
              else
              {
          
                  ptr->info=num;
                  ptr->next=*top;
                  *top=ptr;
              }
          }
          node *get_union(node *top1,node *top2)
          {
              node *result=NULL,*t1,*t2;
              t1=top1;
              t2=top2;
              while(t1!=NULL)
              {
                  push(&result,t1->info);
                  t1=t1->next;
              }
              while(t2!=NULL)
              {
                  if(result->info!=t2->info)
                      push(&result,t2->info);
                  t2=t2->next;
              }
              return result;
          }
          node *get_intersection(node *top1,node *top2)
          {
              node *result=NULL,*t1;
              t1=top1;
              while(t1!=NULL)
              {
                  if(t1->info==top2->info)
                      push(&result,t1->info);
                  t1=t1->next;
              }
              return result;
          }
          void display(node *tp)  //Display function is defined.
          {
              while(tp!=NULL)
              {
                  printf("%d",tp->info);
                  tp=tp->next;
              }
          }`,
        },
        {
          id: '02',
          title:
            'Q2. Write a C program to implement priority queue using singly linked list.',
          data: `#include<stdio.h>
          #include<stdlib.h>
          typedef struct node
          {
              int info,priority;
              struct node *next;
          }node;
          void insert(node **,node **,int); //Insert function
          void serve(node **);  //Serve function
          void display(node *);  //Display function
          int main()
          {
              node *front=NULL,*rear=NULL;
              int choice,num;
              char ch;
              do
              {
                  printf("Press 1 for Insert. Press 2 for Serve. Press 3 for Display.");
                  printf("Enter your choice:- ");
                  scanf("%d",&choice);
                  switch(choice)
                  {
                      case 1:
                          printf("Enter the number to be inserted : - ");
                          scanf("%d",&num);
                          insert(&front,&rear,num);
                          if(front==NULL)
                          {
                              front=rear;
                          }
                          break;
                      case 2:
                          if(front==NULL)
                          {
                              printf("Underflow");
                          }
                          else
                              serve(&front);
                          break;
                      case 3:
                          if(front==NULL)
                          {
                              printf("No elements");
                          }
                          else
                              display(front);
                          break;
                      default: printf("Invalid choice");
                  }
                  printf("Do you want to continue?");
                  fflush(stdin);
                  scanf("%c",&ch);
              }while(ch=='Y'||ch=='y');
              return 0;
          }
          void insert(node **front,node **rear,int num) //Insert function is defined.
          {
              node *ptr,*temp;
              int pri;
              printf("Enter priority : - ");
              scanf("%d",&pri);
              ptr=(struct node*)malloc(sizeof(struct node));
              if(ptr==NULL)
              {
                  printf("Not enough memory");
              }
              ptr->info=num;
              ptr->priority=pri;
              ptr->next=NULL;
              if(*(rear)==NULL&&*front==NULL)
              {
                  *(front)=*(rear)=ptr;
              }
              else if(ptr->priority<(*front)->priority)
              {
                  ptr->next=(*front);
                  (*front)=ptr;
              }
              else if(ptr->priority>(*rear)->priority)
              {
                  (*rear)->next=ptr;
                  (*rear)=ptr;
              }
              else
              {
                  temp=(*front);
                  while((temp->next)->priority<ptr->priority)
                      temp=temp->next;
                  ptr->next=temp->next;
                  temp->next=ptr;
              }
          }
          void serve(node **front)  //Serve function is defined.
          {
              node *ptr;
              ptr=*front;
              printf("The element served is %d",(*front)->info);
              (*front)=(*front)->next;
              free(ptr);
          }
          void display(node *front)  //Display function is defined.
          {
              while(front!=NULL)
              {
                  printf("%d",front->info);
                  front=front->next;
              }
          }`,
        },
        {
          id: '03',
          title:
            'Q3. Write a C program using circular linked list to do processor scheduling for n processes. Every process is given a CPU time slot of 10 seconds at a time. Find which process will complete when and what will be the total waiting time for every process.',
          data: `#include<stdio.h>
          #include<stdlib.h>
          #define qtm 10
          typedef struct node
          {
              int info;
              int time;
              struct node *next;
          }nodetype;
          void insert(nodetype **,nodetype **,int,int);
          void serve(nodetype **,nodetype **);
          void display(nodetype *);
          int main()
          {
              nodetype *head=NULL,*tail=NULL,*temp;
              int n,a[20],b[20]={0},i,t=0;
              printf("Enter the number of processes");
              scanf("%d",&n);
              printf("Enter the process time");
              for(i=0;i<n;i++)
              {
                  scanf("%d",&a[i]);
                  insert(&head, &tail, a[i], i);
              }
              temp=head;
              do
              {
                  if(temp->time<=qtm)
                  {
                      t+=temp->time;
                      b[(temp->info)]=t;
                      temp->time=0;
                      temp=temp->next;
                      serve(&head, &tail);
                  }
                  else
                  {
                      t+=qtm;
                      temp->time-=qtm;
                      temp=temp->next;
                  }
                  display(head);
              }while(head!=NULL);
              for(i=0;i<n;i++)
              {
                  printf("Process : %d",i+1);
                  printf("Given Process Time : %d",a[i]);
                  printf("Total Process Time : %d",b[i]);
                  printf("Waiting Time : %d",b[i]-a[i]);
              }
              return 0;
          }
          void insert(nodetype **head, nodetype **tail, int n, int pos)
          {
              nodetype *ptr=(nodetype*)malloc(sizeof(nodetype));
              if(ptr==NULL)
              {
                  printf("Not Enough Memory");
                  return;
              }
              ptr->info=pos;
              ptr->time=n;
              if((*head)==NULL && (*tail)==NULL)
                  (*head)=ptr;
              else
                  (*tail)->next=ptr;
              (*tail)=ptr;
              (*tail)->next=(*head);
          }
          void serve(nodetype **head, nodetype **tail)
          {
              nodetype *temp, *p=(*head);
              if((*head)==(*tail) && (*head)->time==0)
              {
                  temp=(*head);
                  (*head)=(*tail)=NULL;
              }
              else if((*head)->time==0)
              {
                  temp=(*head);
                  (*head)=(*head)->next;
                  (*tail)->next=(*head);
              }
              else if((*tail)->time==0)
              {
                  while(p->next!=(*tail))
                      p=p->next;
                  temp=(*tail);
                  (*tail)=p;
                  (*tail)->next=(*head);
              }
              else
              {
                  while(p->next->time!=0)
                      p=p->next;
                  temp=p->next;
                  p->next=temp->next;
              }
              free(temp);
          }
          void display(nodetype *head)
          {
              static int y=1;
              nodetype *temp=head;
              if(head==NULL)
                  return;
              printf("After %d pass",y++);
              do
              {
                  printf("%d: %d  ",(temp->info)+1,temp->time);
                  temp=temp->next;
              }while(temp!=head);
              printf("");
          }`,
        },
        {
          id: '04',
          title:
            'Q4. Write a C program to implement stack using linked list and then display stack from bottom to top.',
          data: `#include<stdio.h>
          #include<stdlib.h>
          typedef struct node
          {
              int info;
              struct node *next;
          }node;
          void push(node **,int); //Push function
          void display(node *);  //Display function
          int main()
          {
              node *top=NULL;
              int choice,num;
              char ch;
              do
              {
                  printf("Press 1 for Push. Press 2 for Display.");
                  printf("Enter your choice:- ");
                  scanf("%d",&choice);
                  switch(choice)
                  {
                      case 1:
                          printf("Enter the number to be pushed : - ");
                          scanf("%d",&num);
                          push(&top,num);
                          break;
                      case 2:
                          if(top==NULL)
                          {
                              printf("No elements");
                          }
                          else
                              display(top);
                          break;
                      default: printf("Invalid choice");
                  }
                  printf("Do you want to continue?");
                  fflush(stdin);
                  scanf("%c",&ch);
              }while(ch=='Y'||ch=='y');
              return 0;
          }
          void push(node **top,int num) //Push function is defined.
          {
              node *ptr;
              ptr=(struct node*)malloc(sizeof(struct node));
              if(ptr==NULL)
              {
                  printf("Not enough memory");
              }
              else
              {
          
                  ptr->info=num;
                  ptr->next=*top;
                  *top=ptr;
              }
          }
          void display(node *tp)  //Display function is defined.
          {
              if(tp==NULL)
                  return;
              display(tp->next);
              printf("%d",tp->info);
          }`,
        },
        {
          id: '05',
          title:
            'Q5. Write a C program to split a singly linked list, the node information is given by user at which list has to split.',
          data: `#include<stdio.h>
          #include<stdlib.h>
          typedef struct node
          {
              int info;
              struct node *next;
          }node;
          void push(node **,int); //Push function
          void split(node *,node **,node **,int);    //Split function
          void display(node *);  //Display function
          int main()
          {
              node *top=NULL,*p=NULL,*q=NULL;
              int choice,num,n;
              char ch;
              do
              {
                  printf("Press 1 for Push. Press 2 for Splitting. Press 3 for Displaying original linked list. Press 4 for Displaying 1st linked list. Press 5 for Displaying 2nd linked list.");
                  printf("Enter your choice:- ");
                  scanf("%d",&choice);
                  switch(choice)
                  {
                      case 1:
                          printf("Enter the number to be pushed : - ");
                          scanf("%d",&num);
                          push(&top,num);
                          break;
                      case 2:
                          if(top==NULL)
                              printf("Can't be split!!");
                          else
                          {
                              printf("Enter the value after which splitting is to be done :- ");
                              scanf("%d",&n);
                              split(top,&p,&q,n);
                              break;
                          }
                      case 3:
                          if(top==NULL)
                          {
                              printf("No elements");
                          }
                          else
                              display(top);
                          break;
                      case 4:
                          if(p==NULL)
                          {
                              printf("No elements");
                          }
                          else
                              display(p);
                          break;
                      case 5:
                          if(q==NULL)
                          {
                              printf("No elements");
                          }
                          else
                              display(q);
                          break;
                      default: printf("Invalid choice");
                  }
                  printf("Do you want to continue?");
                  fflush(stdin);
                  scanf("%c",&ch);
              }while(ch=='Y'||ch=='y');
              return 0;
          }
          void push(node **top,int num) //Push function is defined.
          {
              node *ptr;
              ptr=(struct node*)malloc(sizeof(struct node));
              if(ptr==NULL)
              {
                  printf("Not enough memory");
              }
              else
              {
          
                  ptr->info=num;
                  ptr->next=*top;
                  *top=ptr;
              }
          }
          void split(node *top,node **p,node **q,int n)
          {
              node *ptr;
              ptr=top;
              *p=ptr;
              *q=ptr->next;
              while((*p)->info!=n)
              {
                  *p=(*p)->next;
                  *q=(*q)->next;
              }
              (*p)->next=NULL;
              *p=top;
          }
          void display(node *tp)  //Display function is defined.
          {
              while(tp!=NULL)
              {
                  printf("%d",tp->info);
                  tp=tp->next;
              }
          }`,
        },
        {
          id: '06',
          title:
            'Q6. Write a C program to delete alternate node from a singly linked list.',
          data: `#include<stdio.h>
          #include<stdlib.h>
          typedef struct node
          {
              int info;
              struct node *next;
          }node;
          void push(node **,int); //Push function
          void delete_alt(node **);  //Pop function
          void display(node *);  //Display function
          int main()
          {
              node *top=NULL;
              int choice,num;
              char ch;
              do
              {
                  printf("Press 1 for Push. Press 2 for Pop. Press 3 for Display.");
                  printf("Enter your choice:- ");
                  scanf("%d",&choice);
                  switch(choice)
                  {
                      case 1:
                          printf("Enter the number to be pushed : - ");
                          scanf("%d",&num);
                          push(&top,num);
                          break;
                      case 2:
                          if(top==NULL)
                              printf("Underflow");
                          else
                              delete_alt(&top);
                          break;
                      case 3:
                          if(top==NULL)
                              printf("No elements");
                          else
                              display(top);
                          break;
                      default: printf("Invalid choice");
                  }
                  printf("Do you want to continue?");
                  fflush(stdin);
                  scanf("%c",&ch);
              }while(ch=='Y'||ch=='y');
              return 0;
          }
          void push(node **top,int num) //Push function is defined.
          {
              node *ptr;
              ptr=(struct node*)malloc(sizeof(struct node));
              if(ptr==NULL)
              {
                  printf("Not enough memory");
              }
              else
              {
          
                  ptr->info=num;
                  ptr->next=*top;
                  *top=ptr;
              }
          }
          void delete_alt(node **top)  //Pop function is defined.
          {
              node *p,*q;
              if((*top)==NULL)
                  return;
              p=*top;
              q=p->next;
              while(p!=NULL&&q!=NULL)
              {
                  p->next=q->next;
                  printf("Popped Element is %d",q->info);
                  free(q);
                  p=p->next;
                  if(p!=NULL)
                      q=p->next;
              }
          }
          void display(node *tp)  //Display function is defined.
          {
              while(tp!=NULL)
              {
                  printf("%d",tp->info);
                  tp=tp->next;
              }
          }`,
        },
        {
          id: '07',
          title:
            'Q7. Write a menu driven C program to create a doubly linked list using double pointer, by inserting node so that linked list remains in ascending order.',
          data: `#include<stdio.h>
          #include<stdlib.h>
          typedef struct node
          {
              struct node *prev;
              int info;
              struct node *next;
          }node;
          void insert(node **,node **,int); //Insert function
          void display(node *);  //Display function
          int main()
          {
              node *lft=NULL,*rt=NULL;
              int choice,num,key;
              char ch;
              do
              {
                  printf("Press 1 for Insert. Press 2 for Display.");
                  printf("Enter your choice:- ");
                  scanf("%d",&choice);
                  switch(choice)
                  {
                      case 1:
                          printf("Enter the number to be inserted : - ");
                          scanf("%d",&num);
                          insert(&lft,&rt,num);
                          break;
                      case 2:
                          if(lft==NULL)
                          {
                              printf("No elements");
                          }
                          else
                              display(lft);
                          break;
                      default: printf("Invalid choice");
                  }
                  printf("Do you want to continue?");
                  fflush(stdin);
                  scanf("%c",&ch);
              }while(ch=='Y'||ch=='y');
              return 0;
          }
          void insert(node **l,node **r,int n) //Insert function is defined.
          {
              node *ptr;
              ptr=(struct node*)malloc(sizeof(struct node));
              if(ptr==NULL)
              {
                  printf("Not enough memory");
              }
              ptr->info=n;
              ptr->next=NULL;
              if((*r)==NULL)
              {
                  (*l)=ptr;
                  (*r)=ptr;
                  ptr->prev=NULL;
              }
              else if(ptr->info<(*l)->info)
              {
                  ptr->prev=NULL;
                  (*l)->prev=ptr;
                  ptr->next=(*l);
                  (*l)=ptr;
              }
              else if(ptr->info>(*r)->info)
              {
                  ptr->prev=(*r);
                  (*r)->next=ptr;
                  (*r)=ptr;
              }
              else
              {
                  node *temp;
                  temp=(*l);
                  while(n>temp->next->info)
                      temp=temp->next;
                  ptr->next=temp->next;
                  temp->next=ptr;
                  ptr->next->prev=ptr;
                  ptr->prev=temp;
              }
          }
          void display(node *l)  //Display function is defined.
          {
              while(l!=NULL)
              {
                  printf("%d",l->info);
                  l=l->next;
              }
          }`,
        },
        {
          id: '08',
          title: `Q8. Write a C program to create a binary search tree and then write ‘C’ function for following operations
          (i)- Count total number of nodes.
          (ii)- Count total number of leaf nodes.`,
          data: `#include<stdio.h>
          #include<stdlib.h>
          typedef struct node
          {
              struct node *left;
              int info;
              struct node *right;
          }tree;
          void insert(tree **,int); //Push function
          int countnodes(tree *); //Node count
          int leafnodes(tree* );  //Leaf node count
          void inorder(tree *);  //Display function
          int main()
          {
              tree *root=NULL;
              int choice,num,c1,c2;
              char ch;
              do
              {
                  printf("Press 1 for Insert. Press 2 to count total nodes. Press 3 to count total number of leaf nodes. Press 4 for In order display.");
                  printf("Enter your choice:- ");
                  scanf("%d",&choice);
                  switch(choice)
                  {
                      case 1:
                          printf("Enter the number to be pushed : - ");
                          scanf("%d",&num);
                          insert(&root,num);
                          break;
                      case 2:
                          if(root==NULL)
                          {
                              printf("No elements");
                          }
                          else
                          {
                               c1=countnodes(root);
                               printf("Total number of nodes = %d",c1);
                          }
                          break;
                      case 3:
                          if(root==NULL)
                          {
                              printf("No elements");
                          }
                          else
                          {
                               c2=leafnodes(root);
                               printf("Total number of leaf nodes = %d",c2);
                          }
                          break;
                      case 4:
                          if(root==NULL)
                          {
                              printf("No elements");
                          }
                          else
                              inorder(root);
                          break;
                      default: printf("Invalid choice");
                  }
                  printf("Do you want to continue?");
                  fflush(stdin);
                  scanf("%c",&ch);
              }while(ch=='Y'||ch=='y');
              return 0;
          }
          void insert(tree **r,int n) //Push function is defined.
          {
              tree *p;
              p=(struct node*)malloc(sizeof(struct node));
              if(p==NULL)
              {
                  printf("Not enough memory");
              }
              else
              {
                  if(*r==NULL)
                  {
                      p->info=n;
                      p->left=NULL;
                      p->right=NULL;
                      *r=p;
                  }
                  else if(n<(*r)->info)
                      insert(&((*r)->left),n);
                  else
                      insert(&((*r)->right),n);
              }
          }
          int countnodes(tree *r)
          {
              static int count = 0;
              if(r != NULL)
              {
                  countnodes(r->left);
                  count++;
                  countnodes(r->right);
              }
              return count;
          }
          int leafnodes(tree* r)
          {
              static int c=0;
              if(r!=NULL)
              {
                  leafnodes(r->left);
                  if((r->right==NULL) && (r->left==NULL))
                  {
                      c++;
                  }
                  leafnodes(r->right);
              }
              return c;
          }
          void inorder(tree *r)  //Display function is defined.
          {
              if(r==NULL)
                  return;
              inorder(r->left);
              printf("%d\t",r->info);
              inorder(r->right);
          }`,
        },
        {
          id: '09',
          title:
            'Q9. Write a C program to sort an array using insertion sort technique.',
          data: `#include<stdio.h>
          #define MAX 100
          void insertion(int [],int);
          int main()
          {
              int a[MAX],n,i;
              printf("Enter the limit of the array :- ");
              scanf("%d",&n);
              printf("Enter the elements of the array :- ");
              for(i=0;i<n;i++)
                  scanf("%d",&a[i]);
              insertion(a,n);
              printf("Array after soring");
              for(i=0;i<n;i++)
                  printf("%d",a[i]);
              return 0;
          }
          void insertion(int a[],int n)
          {
              int i,j,t=0;
              for(i=1;i<n;i++)
              {
                  t=a[i];
                  j=i-1;
                  while(j>=0&&t<a[j])
                  {
                      a[j+1]=a[j];
                      j--;
                  }
                  a[j+1]=t;
              }
          }`,
        },
        {
          id: '010',
          title:
            'Q10. Write a C program to sort an array using quick sort technique.',
          data: `#include<stdio.h>
          #define MAX 100
          void m_sort(int [],int [],int,int);
          void merge(int [],int [],int,int,int);
          int main()
          {
              int a[MAX],temp[MAX],n,i;
              printf("Enter the limit of the array :- ");
              scanf("%d",&n);
              printf("Enter the elements of the array :- ");
              for(i=0;i<n;i++)
                  scanf("%d",&a[i]);
              m_sort(a,temp,0,n-1);
              printf("Array after sorting");
              for(i=0;i<n;i++)
                  printf("%d",a[i]);
              return 0;
          }
          void m_sort(int a[],int temp[],int lb,int ub)
          {
              int mid;
              if(lb<ub)
              {
                  mid=(lb+ub)/2;
                  m_sort(a,temp,lb,mid);
                  m_sort(a,temp,mid+1,ub);
                  merge(a,temp,lb,mid+1,ub);
              }
          }
          void merge(int a[],int temp[],int lb,int mid,int ub)
          {
              int le=mid-1,k=lb,i=0,num;
              num=ub-lb+1;
              while(lb<=le&&mid<=ub)
              {
                  if(a[lb]<a[mid])
                  {
                      temp[k]=a[lb];
                      lb++;
                      k++;
                  }
                  else
                  {
                      temp[k]=a[mid];
                      mid++;
                      k++;
                  }
              }
              while(lb<=le)
              {
                  temp[k]=a[lb];
                  lb++;
                  k++;
              }
              while(mid<=ub)
              {
                  temp[k]=a[mid];
                  mid++;
                  k++;
              }
              for(i=0;i<num;i++)
              {
                  a[ub]=temp[ub];
                  ub--;
              }
          }`,
        },
        {
          id: '011',
          title:
            'Q11. Write a C program to sort an array using quick sort technique.',
          data: `#include<stdio.h>
          #define MAX 100
          void quick(int [],int,int);
          int main()
          {
              int a[MAX],n,i;
              printf("Enter the limit of the array :- ");
              scanf("%d",&n);
              printf("Enter the elements of the array :- ");
              for(i=0;i<n;i++)
                  scanf("%d",&a[i]);
              quick(a,0,n-1);
              printf("Array after soring");
              for(i=0;i<n;i++)
                  printf("%d",a[i]);
              return 0;
          }
          void quick(int a[],int lb,int ub)
          {
              int i=lb,j=ub,key=a[lb],t;
              if(lb>=ub)
                  return;
              while(i<j)
              {
                  while(key>=a[i]&&i<j)
                      i++;
                  while(key<a[j])
                      j--;
                  if(i<j)
                  {
                      t=a[i];
                      a[i]=a[j];
                      a[j]=t;
                  }
              }
              a[lb]=a[j];
              a[j]=key;
              quick(a,lb,j-1);
              quick(a,j+1,ub);
          }`,
        },
        {
          id: '012',
          title:
            'Q12. Write a C program to convert any infix expression into postfix expression using stack.',
          data: `#include<stdio.h>
          #include<stdlib.h>      /* for exit() */
          #include<ctype.h>     /* for isdigit(char ) */
          #include<string.h>
          #define SIZE 10
          void InfixToPostfix(char [],char [],int *,char []);
          void push(char,int *,char []);
          char pop(int *,char []);
          int is_operator(char);
          int preced(char);
          int main()
          {
              char infix[SIZE], postfix[SIZE];         /* declare infix string and postfix string */
              char stack[SIZE];
              int top=-1;
              printf("ASSUMPTION: The infix expression contains single letter variables and single digit constants only.");
              printf("Enter Infix expression : ");
              gets(infix);
              InfixToPostfix(infix,postfix,&top,stack);                   /* call to convert */
              printf("Postfix Expression: ");
              puts(postfix);                     /* print postfix expression */
              return 0;
          }
          void push(char item, int *top, char stack[])
          {
              if((*top) >= SIZE-1)
              {
                  printf("Stack Overflow.");
              }
              else
              {
                  (*top) = (*top)+1;
                  stack[(*top)] = item;
              }
          }
          char pop(int *top, char stack[])
          {
              char item ;
              if((*top) <0)
              {
                  printf("stack under flow: invalid infix expression");
                  getchar();
                  exit(1);
              }
              else
              {
                  item = stack[(*top)];
                  (*top) = (*top)-1;
                  return(item);
              }
          }
          int is_operator(char symbol)
          {
              if(symbol == '^' || symbol == '*' || symbol == '/' || symbol == '+' || symbol =='-')
              {
                  return 1;
              }
              else
              {
              return 0;
              }
          }
          int precedence(char symbol)
          {
              if(symbol == '^')/* exponent operator, highest precedence*/
              {
                  return(3);
              }
              else if(symbol == '*' || symbol == '/')
              {
                  return(2);
              }
              else if(symbol == '+' || symbol == '-')          /* lowest precedence */
              {
                  return(1);
              }
              else
              {
                  return(0);
              }
          }
          void InfixToPostfix(char infix_exp[], char postfix_exp[], int *top, char stack[] )
          {
              int i, j;
              char item;
              char x;
              push('(',top,stack);                               /* push '(' onto stack */
              strcat(infix_exp,")");                  /* add ')' to infix expression */
          
              i=0;
              j=0;
              item=infix_exp[i];         /* initialize before loop*/
          
              while(item != '\0')        /* run loop till end of infix expression */
              {
                  if(item == '(')
                  {
                      push(item,top,stack);
                  }
                  else if( isdigit(item) || isalpha(item))
                  {
                      postfix_exp[j] = item;              /* add operand symbol to postfix expr */
                      j++;
                  }
                  else if(is_operator(item) == 1)        /* means symbol is operator */
                  {
                      x=pop(top,stack);
                      while(is_operator(x) == 1 && precedence(x)>= precedence(item))
                      {
                          postfix_exp[j] = x;                  /* so pop all higher precedence operator and */
                          j++;
                          x = pop(top,stack);                       /* add them to postfix expression */
                      }
                      push(x,top,stack);
                      push(item,top,stack);                 /* push current operator symbol onto stack */
                  }
                  else if(item == ')')         /* if current symbol is ')' then */
                  {
                      x = pop(top,stack);                   /* pop and keep popping until */
                      while(x != '(')                /* '(' encountered */
                      {
                          postfix_exp[j] = x;
                          j++;
                          x = pop(top,stack);
                      }
                  }
                  else
                  {
                      printf("Invalid infix Expression.");        /* the it is illegal  symbol */
                      getchar();
                      exit(1);
                  }
                  i++;
                  item = infix_exp[i]; /* go to next symbol of infix expression */
              } /* while loop ends here */
              if((*top)>0)
              {
                  printf("Invalid infix Expression.");        /* the it is illegal  symbol */
                  getchar();
                  exit(1);
              }
              postfix_exp[j] = '\0';
          }`,
        },
        {},
      ],
    };
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>{this.renderAccordians()}</View>
      </ScrollView>
    );
  }
  renderAccordians = (item) => {
    const items = [];
    for (item of this.state.menu) {
      items.push(<Accordian3 title={item.title} data={item.data} />);
    }
    return items;
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 5,
    backgroundColor: 'gold',
  },
});
