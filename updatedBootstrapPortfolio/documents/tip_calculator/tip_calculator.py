# Make a python script  tip_calculator.py that takes a user's input at the command line for:
print("Welcome to Mikayla's Tip Calculator")

def checking_user_input_for_num():
    is_total = False
    # Add a try/except block here because what if the user doesn't enter in a number
    while not is_total:
        # Prompt the user to enter the amount on the bill includes the sales tax
        total_bill_from_user = input("What is the total bill? (Example: 20 for $20.00 or 13.50 for $13.50): ")
        try:
            total_bill_from_user = float(total_bill_from_user)
            # Assume there is a 10% sales tax. Don't forget to add this into the total bill!
            total_bill_no_tax = total_bill_from_user
            sale_tax = total_bill_from_user * 0.10
            total_bill_from_user = total_bill_from_user + sale_tax
            # Prompt the user for the % tip they'd like to leave
            tip_percentage = int(
                input(
                    "What percentage tip would you like to give? (Example: 5, 10, 15, 20): "
                )
            )
            if tip_percentage < 10:
                print(
                    "Seriously, you should rethink this! Or better yet leave right now, remove yourself from my section!\n"
                )
            elif tip_percentage >= 10 or tip_percentage <= 20:
                print("That was nice of you! Please come see me again! \n")
            else:
                print("WOW, CAN WE DO THIS AGAIN! I APPREICATE IT \n")
            # Prompt the user for the # of people splitting the bill
            num_of_people = int(input("How many people are splitting the bill?: "))
            print("\n")
            # What if no one wants to claim their bill 
            if num_of_people == 0:
                print("Yo, a dine and dash.. You're childish!")
                num_of_people = int(
                    input("Seriously, how many people are splitting the bill?: ")
                )
            # What if there is a single person and no one to split it
            elif num_of_people == 1:
                amount_to_pay_per_person = "%.2f" % round(
                    float(
                        ((tip_percentage / 100 + 1) * total_bill_from_user)
                        / num_of_people
                    ),
                    2,
                )
            # Calculate the value each person owes based on the bill and tips the user entered
            # I don’t like the omission of the trailing zero, so I am going to adjust the code to ensure it always prints with 2 decimal places. To do this, add “%.2f” % ahead of the round function.
            else:
                amount_to_pay_per_person = "%.2f" % round(
                    float(
                        ((tip_percentage / 100 + 1) * total_bill_from_user)
                        / num_of_people
                    ),
                    2,
                )
            # Print the $ amount of the tip
            tip_amount = "%.2f" % float(tip_percentage / 100 * total_bill_no_tax)
            print(tip_amount, "Here is the amount")
            # convert total bill and tip amount to floats so they can be added
            total_bill_from_user_float = round(float(total_bill_from_user), 2)
            tip_amount_float = round(float(tip_amount), 2)
            tip_and_total = "%.2f" % float(
                total_bill_from_user_float + tip_amount_float
            )
            # The total bill (including tip)
            print(
                f"Tip amount: ${tip_amount}\nTotal bill including tip: ${tip_and_total}\nEach person owes: ${amount_to_pay_per_person}"
            )
            run_again = ''
            run_again = input('Would you like to run Tip Calculator again? Enter y for yes. ')
            checking_user_type(run_again)
            return
        # Print what each person needs to pay
        except ValueError:
            print(
                "You did not enter a valid number, seriously you need to pay your bill."
            )
def checking_user_type(run_again):
    if run_again == 'y' or run_again == 'Y':
        checking_user_input_for_num()
    else:
        print('Have a great day!')
    return 
      
checking_user_input_for_num()
