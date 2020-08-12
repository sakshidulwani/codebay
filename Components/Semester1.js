import React, {Component} from 'react';
import {View, Text, Button, ScrollView, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Accordian1 from './Accordian1';

const Semester1Stack = createStackNavigator();
const Semester1StackScreen = ({navigation}) => {
  return (
    <Semester1Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'gold',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Semester1Stack.Screen name="Semester1" component={Semester1Screen} />
    </Semester1Stack.Navigator>
  );
};

export default Semester1StackScreen;

class Semester1Screen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: [
        {},
        {
          key: 1,
          title:
            'Q1. Write a program to read an alphabet . If it is in capital case then it to lower case and vice versa.',
          data: ` #include<stdio.h>           			
          int main()                 				  
          {
              char ch;                             
             printf("****INPUT****");
             printf("Enter a character : ");     
             scanf("%c",&ch);                        
             if(ch>=97 && ch<=122)
              ch=ch-32;
             else if(ch>=65 && ch<=90)
              ch=ch+32;
             printf("****OUTPUT****");
             printf("%c",ch);                       
             return 0;                               
          }
          
                  ****INPUT****
  
          Enter a character : 
          P
          
                  ****OUTPUT****
  
          p `,
        },

        {
          key: 2,
          title: 'Q2. Write a program to find minimum of the three numbers.',

          data: `#include<stdio.h>
          int main ()
          {
              int nm1,nm2,nm3,min;
              printf("****INPUT****");
              printf("Enter first number : ");
              scanf("%d",&nm1);
              printf("Enter second number : ");
              scanf("%d",&nm2);
              printf("Enter third number : ");
              scanf("%d",&nm3);
          
              if(nm1<nm2 && nm1< nm3)
                  min=nm1;
              else if(nm2<nm1 && nm2<nm3)
                  min=nm2;
              else
                  min=nm3;
              printf("****OUTPUT****");
              printf("Minimum among %d,%d,%d is : %d",nm1,nm2,nm3,min);
          return 0;
          }
          
          
                  ****INPUT****
  
          Enter first number : 1580
          
          Enter second number : 3082
          
          Enter third number : 2497
          
          
                  ****OUTPUT****
  
          Minimum among 1580,3082,2497 is : 1580`,
        },
        {
          key: 3,
          title:
            'Q3. Write a program that will display the grade of a student provided his/her marks.',
          data: `#include<stdio.h>
            int main()
            {
              int marks;
              printf("****INPUT****");
              printf("Enter marks of student : ");
              scanf("%d",&marks);
              printf("*****OUTPUT*****");
              if(marks>80)
                printf("Grade : A");
              else if(marks>60)
                printf("Grade : B");
              else if(marks>50)
                printf("Grade : C");
              else if(marks>40)
                printf("Grade : D");
              else if(marks>34)
                printf("Grade : E");
              else
                printf("Grade : F");
                return 0;
            }
            
                    ****INPUT****
    
            Enter marks of student : 60
            
                    *****OUTPUT*****
    
            Grade : C
            `,
        },

        {
          key: 4,
          title:
            'Q4. Write a menu driven program to design a calculator which can perform basic operations like %,/,*,+,-.',
          data: `#include<stdio.h>
          int main()
          {
              int ans,num1,num2,mod,div,mult,add,sub;
              printf("****INPUT****");
              printf("Enter first number : ");
              scanf("%d",&num1);
              printf("Enter second number : ");
              scanf("%d",&num2);
              printf("Press :");
              printf("1 for modulus");
              printf("2 for division");
              printf("3 for multiplication");
              printf("4 for addition");
              printf("5 for subtraction");
              scanf("%d",&ans);
              printf("****OUTPUT****");
          
              switch(ans)
              {
              case 1:
                  mod= num1%num2;
                  printf("Modulus of %d and %d gives : %d",num1,num2,mod);
                  break;
              case 2:
                  div= num1/num2;
                  printf("Division of %d and %d gives : %d",num1,num2,div);
                  break;
              case 3:
                  mult= num1*num2;
                  printf("Multiplication of %d and %d gives : %d",num1,num2,mult);
                  break;
              case 4:
                  add=num1+num2;
                  printf("Addition of %d and %d gives : %d",num1,num2,add);
                  break;
              case 5:
                  sub=num1-num2;
                  printf("Subtraction of %d and %d gives : %d",num1,num2,sub);
                  break;
              default:
                  printf("INVALID INPUT!!");
              }
              return 0;
          }
          
                  ****INPUT****
  
          Enter first number : 76
          
          Enter second number : 31
          
          Press :
          1 for modulus
          2 for division
          3 for multiplication
          4 for addition
          5 for subtraction
          4
          
          
                  ****OUTPUT****
  
          Addition of 76 and 31 gives : 107`,
        },
        {
          key: 5,
          title: `Q5. Write a program to print the pattern.
          1
        1 2 1
     1 2 3 2 1
  1 2 3 4 3 2 1
1 2 3 4 5 4 3 2 1`,
          data: `#include<stdio.h>
          int main()
          {
              int n,i,j,k,spc,space;
              printf("****INPUT****");
              printf("Enter value of n : ");
              scanf("%d",&n);
              space=n-1;
              printf("****OUTPUT****");
                  for(i=1;i<=n;i++)
                  {
                          for(spc=1;spc<=space;spc++)
                              printf("  ");
                          for(j=1;j<=i;j++)
                              printf("%d ",j);
                          for(k=i-1;k>=1;k--)
                              printf("%d ",k);
                      printf("");
                      space--;
                  }
                  return 0;
          
          }
          
          
                  ****INPUT****
  
          Enter value of n : 5
          
          
                  ****OUTPUT****
  
                      1
                   1 2 1
                1 2 3 2 1
             1 2 3 4 3 2 1
          1 2 3 4 5 4 3 2 1
          `,
        },
        {
          key: 6,
          title:
            'Q6. Write a program which will take a number and print its reverse along with number of digits present in that number.',
          data: `#include<stdio.h>
          int main()
          {
              int num,rev=0,cnt=0,div;
              printf("****INPUT****");
              printf("Enter number : ");
              scanf("%d",&num);
              while(num>0)
              {
                  div = num%10;
                  rev = rev*10+div;
                  num =num/10;
                  cnt++;
              }
              printf("****OUTPUT****");
              printf("Reverse of number : %d",rev);
              printf("Number of digits : %d",cnt);
              return 0;
          
          }
          
                  ****INPUT****
  
          Enter number : 13542
          
          
                  ****OUTPUT****
  
          Reverse of number : 24531
          Number of digits : 5
          `,
        },
        {
          key: 7,
          title:
            'Q7. Write a program which will print fibonacci series upto limit n.',
          data: `#include<stdio.h>
        int main()
        {
            int n,x=0,y=1,i,z;
            printf("****INPUT****");
            printf("Enter limit : ");
            scanf("%d",&n);
            printf("****OUTPUT****");
            printf(" %d,%d",x,y);
            for(i=2 ; i<n ;i++)
            {
        
                z = x+y;
                printf(",%d",z);
                x=y;
                y=z;
            }
            return 0;
        }
        
        
                ****INPUT****

        Enter limit : 10
        
        
                ****OUTPUT****

        
         0,1,1,2,3,5,8,13,21,34
        `,
        },
        {
          key: 8,
          title:
            'Q8. Write a program to check whether a number is prime or not.',
          data: `#include<stdio.h>
            int main()
            {
                int n,cnt=0,i;
                printf("****INPUT****");
                printf("Enter a number : ");
                scanf("%d",&n);
                for( i=1 ; i<=n/2 ; i++)
                {
            
                    if(n%i==0)
                        cnt++;
                }
                printf("****OUTPUT****");
                if(cnt==1)
                    printf("YES");
                else
                    printf("NO");
                return 0;
            }
            
            
                    ****INPUT****
    
            Enter a number : 23
            
            
                    ****OUTPUT****
    
            YES
            `,
        },
        {
          key: 9,
          title: 'Q9. Write a program to add two 1D array of unequal size.',
          data: `#include<stdio.h>
          int main()
          {
              int arr1[20]= {0} , arr2[20] = {0} ,sum [20], n1 , n2 , i;
             printf("****INPUT****");
             printf("Enter limit of first array : ");
             scanf("%d",&n1);
             for(i=0;i<n1;i++)
             {
                 scanf("%d",&arr1[i]);
             }
             printf("Enter limit of second array : ");
             scanf("%d",&n2);
             for(i=0;i<n2;i++)
             {
                 scanf("%d",&arr2[i]);
             }
             if(n1>=n2)
            {
          
               for(i=0;i<n1;i++)
               {
                   sum[i]=arr1[i]+arr2[i];
               }
             }
             else
             {
                
               for(i=0;i<n2;i++)
               {
                   sum[i]=arr1[i]+arr2[i];
               }
             }
             printf("****OUTPUT****");
             if(n1>=n2)
             {
              printf("Final array: ");
              for(i=0;i<n1;i++)
               {
                 printf("%d ",sum[i]);
               }
             }
             else
             {
              printf("Final array: ");
              for(i=0;i<n2;i++)
               {
                 printf("%d ",sum[i]);
               }
             }
             return 0;
          }
          
                  ****INPUT****
  
          Enter limit of first array : 5
          1 2 3 4 5
          Enter limit of second array : 8
          1 3 5 7 9 4 6 2
          
          
                  ****OUTPUT****
  
          Final array:    2 5 8 11 14 4 6 2
          `,
        },
        {
          key: 10,
          title:
            'Q10. Write a program to input n elements in an array and check whether an inputted number k exists in that array or not. If yes than find frequency of number k in array .',
          data: `#include<stdio.h>
           int main()
           {
           int n,arr[20],cnt=0,j,k,flag=0,i;
           printf("****INPUT****");
           printf("Enter the limit of first array(n) : ");
           scanf("%d",&n);
           for(i=0 ; i<n ; i++)
               scanf("%d",&arr[i]);
           printf("Enter the number(k) : ");
           scanf("%d",&k);
           for(j=0;j<n;j++)
           {
           
               if(arr[j]==k)
               {
           
                   cnt++;
                   flag=1;
               }
           }
               printf("****OUTPUT****");
               if(flag==1)
               {
                   printf("YES number exists in the array.");
                   printf("Frequency of %d : %d",k,cnt);
               }
               else
                   printf("NO number doesn't exists in the array.");
           return 0;
           
           }
           
           
                   ****INPUT****
   
           Enter the limit of first array(n) : 10
           9 2 3 2 4 5 2 6 2 7
           
           Enter the number(k) : 2
           
           
                   ****OUTPUT****
   
           
           YES number exists in the array.
           Frequency of 2 : 4
           `,
        },
        {
          key: 11,
          title:
            'Q11. Write a program to input elements into two matrix. Perform matrix multiplication and print the resultant matrix. ',
          data: `#include<stdio.h>
            int main()
            {
              int arr1[20][20],i,j,k,arr2[20][20],mult[20][20],m1,n1,m2,n2;
              printf("****INPUT****");
              printf("Enter the value of m1 and n1 : ");
              scanf("%d %d",&m1,&n1);
              for( i=0;i<m1;i++)
              {
                  for( j=0;j<n1;j++)
                    scanf("%d",&arr1[i][j]);
              }
              printf("Enter the value of m2 and n2 : ");
              scanf("%d %d",&m2,&n2);
              for(i=0;i<m2;i++)
              {
                  for( j=0;j<n2;j++)
                    scanf("%d",&arr2[i][j]);
              }
            if(n1==m2)
            {
                  for(i=0;i<m1;i++)
                {
                    for( j=0;j<n2;j++)
                        mult[i][j]=0;
                }
                   for( i=0;i<m1;i++)
                {
                    for( j=0;j<n2;j++)
                    {
            
                        for( k=0;k<n1;k++)
                            mult[i][j]+=arr1[i][k]*arr2[k][j];
                }
            
                }
            }
            
                printf("****OUTPUT****");
            
                printf("Resultant matrix :");
                for( i=0;i<m1;i++)
                {
                    for( j=0;j<n2;j++)
                    printf("%d ",mult[i][j]);
                    printf("");
                }
                return 0;
            }
            
            
                    ****INPUT****
    
            Enter the value of m1 and n1 : 2 2
            1 2
            3 4
            Enter the value of m2 and n2 : 2 2
            5 6
            7 8
            
            
                    ****OUTPUT****
    
            Resultant matrix :
            19 22
            43 50
            `,
        },
        {
          key: 12,
          title:
            'Q12. Write a program to input value for n and r to calculate nCr. use function fact() to calculate factorial .',
          data: `#include<stdio.h>
            int fact(int);
            int main()
            {
            int n,r;
            float ans;
            printf("****INPUT****");
            printf("Enter the value for n and r : ");
            scanf("%d %d",&n,&r);
            printf("****OUTPUT****");
            ans = (fact(n))/(fact(n-r)*fact(r));
            printf("%f",ans);
            return 0;
            }
            int fact(int x)
            {
                int f=1,i;
                for( i=2;i<=x;i++)
                    f=f*i;
                return f;
            }
            
            
                    ****INPUT****
    
            Enter the value for n and r : 4 3
            
            
                    ****OUTPUT****
    
            4.000000
            `,
        },
        {
          key: 13,
          title:
            'Q13. Write a program to input n element in an array and calculate sum of digits of all numbers using function.',
          data: `#include<stdio.h>
         int sum(int);
         int main()
         {
           int n,ans,i,arr[20];
           printf("****INPUT****");
           printf("Enter the limit of  array(n) : ");
           scanf("%d",&n);
           for(i=0;i<n;i++)
           {
               scanf("%d",&arr[i]);
           }
           printf("****OUTPUT****");
           for(i=0;i<n;i++)
           {
             ans=sum(arr[i]);
             printf("%d ",ans);
         
           }
           return 0;
         }
         int sum(int x)
         {
             int s=0;
             while(x>0)
             {
                 s=s+x%10;
                 x=x/10;
             }
             return s;
         }
         
                 ****INPUT****
 
         Enter the limit of  array(n) : 10
         19 22 43 32 554 65 728 768 62 7
         
         
                 ****OUTPUT****
 
         10 4 7 5 14 11 17 21 8 7`,
        },
        {
          key: 14,
          title:
            'Q14. Write a program to input element into square matrices and print secondary diagonal elements.',
          data: `#include<stdio.h>
            int main()
            {
                int n,arr[20][20],i,j;
                printf("****INPUT****");
                printf("Enter the size of square matrix : ");
                scanf("%d",&n);
                for( i=0;i<n;i++)
                {
                    for(j=0;j<n;j++)
                       scanf("%d",&arr[i][j]);
                }
                printf("****OUTPUT****");
                for( i=0;i<n;i++)
                {
                    for( j=0;j<n;j++)
                    {
                        if(i+j==n-1)
                            printf("%d ",arr[i][j]);
                    }
                }
                return 0;
            }
            
                    ****INPUT****
    
            Enter the size of square matrix : 3
            2 2 4
            1 2 5
            3 4 6
            
            
                    ****OUTPUT****
    
            4 2 3
            `,
        },
        {
          key: 15,
          title:
            'Q15. Write a program to calculate sum of the following series using recursive function.',
          data: `#include<stdio.h>
       int series(int);
       int main()
       {
       int n,ans;
       printf("****INPUT****");
       printf("Enter the value of n : ");
       scanf("%d",&n);
       ans=series(n);
       printf("****OUTPUT****");
       printf("%d",ans);
       return 0;
       }
       int series(int x)
       {
           if(x==0)
               return 0;
           else
               return((x*x)+series(x-1));
       }
       
       
               ****INPUT****

       Enter the value of n : 4
       
       
               ****OUTPUT****

       30`,
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
  renderAccordians = (item, id) => {
    const items = [];

    for (item of this.state.menu) {
      items.push(
        <Accordian1 key={item.key} title={item.title} data={item.data} />,
      );
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
