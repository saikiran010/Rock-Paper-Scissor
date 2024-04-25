package array;
import java.util.*;
public class ReverseArray {
    
    static int[] doTask(int a[],int n){
          int temp[]=new int[n];
          for(int i=0;i<n;i++){
            temp[i]=a[n-i-1];
          }
          return temp;
    }
    public static void main(String args[]){
        //Scanner sc=new Scanner(System.in);
        int ar[]={1,2,3,4,5};
        System.out.println("The reversed array is "+Arrays.toString(doTask(ar,ar.length)));
    }
}
