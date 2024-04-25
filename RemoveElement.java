package array;

public class RemoveElement {
static{
    System.out.println("Ganesh");
}
static int removeElement(int[] nums, int val) {
            int count=0;
            for(int i=0;i<nums.length;i++){
                if(nums[i]==val){
                    count++;
                }
            }
            return nums.length-count;
        }
public static void main(String args[]){
    int a[]={3,2,2,3,3,3,3,3,3,2,2,2};
    System.out.println(removeElement(a,3));
}
}

