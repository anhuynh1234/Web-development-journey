#include <iostream>
#include <string>

class LinkedList{
    public:
        LinkedList(){

        }
        ~LinkedList(){
            clear();
        }
        int get(int index){
            
        }

        void clear(){
            while(listSize){
                ListNode *deleteNode = last;
                
                if(first != last){
                    last->prev->next = NULL;
                }else{
                    first = NULL;
                }
                last = last->prev;
                listSize--;
                delete deleteNode;
            }
        }


        void pushBack(int item){
            ListNode *node = new ListNode(item, last, NULL);

            if(last != NULL){
                last->next = node;
            }else{
                first = node;
            }

            last = node;
            listSize++;
        }

        void pushFront(int item){
            ListNode *node = new ListNode(item, NULL, first);

            if(first != NULL){
                first->prev = node;
            }else{
                last = node;
            }

            first = node;
            listSize++;
        }

        void pushMiddle(int item){
            int index = (listSize+1)/2;
            ListNode *node = first;
            for(int i = 0; i < index; i++){
                node = first->next;
            }
        }

    private:
        unsigned int listSize;
        ListNode *first, *last;
};

class ListNode{
    public:
        ListNode(int value, ListNode* prev, ListNode* next){
            this->value = value;
        }


        int getValue(){
            return this->value;
        }

        int value;
        ListNode* next;
        ListNode* prev;
};


int main(){
    int n;
    std::cin >> n;


    while(n--){
        std::string command; int value;
        std::cin >> command >> value;

        if(command == "push_back"){

        }else if(command == "push_middle"){

        }else{
            
        }
        
    }
}