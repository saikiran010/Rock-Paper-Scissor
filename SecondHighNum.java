package array;

import java.net.BindException;

public class SecondHighNum {
    public int BinerySearch(int[] a,int x,int f,int l){
        if(f<=l){
            int mid=(f+l)/2;
            if(a[mid]==x){
                return mid;
            }
            else if(a[mid]>x){
                return BinerySearch(a, x,f,mid-1);
            }
            else
               return BinerySearch(a, x,mid+1,l);
        }
        return -1;
    }
    public static void main(String args[]){
        int a[]={1,2,3,4,5,6,7};
        int x=2;
        SecondHighNum obj=new SecondHighNum();
        int res=obj.BinerySearch(a,x,0,a.length-1);
        if(res==-1)
          System.out.println("Element Not Found");
        else
          System.out.println("Element found at the index "+res);
    }
}
